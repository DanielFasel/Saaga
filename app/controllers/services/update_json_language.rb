# This Service updates the temporary json file for a given language with a new translation.
module Services
  class UpdateJsonLanguage
    def initialize(languageId, selected, translation)
      @language = Language.find_by(id: languageId )
      @site = selected[:site][:name].downcase
      @page = selected[:page][:name]
      @word = selected[:word][:name]
      @translation = translation
    end

    def call
      language_local = @language.local
      language_json = "#{Rails.root}/app/javascript/packs/assets/languages/temporary/#{@site}/#{@site}_temporary_#{language_local}.json"
      new_json = language_json + '.new'
      old_json = language_json + '.old'

      # Gotta be carfule with camelcase !!!
      language_hash = JSON.parse(File.read(language_json))
      language_hash[@page.to_str][@word.to_str] = @translation

      File.write(new_json, language_hash.to_json)
      File.rename(language_json, old_json)
      File.rename(new_json, language_json)
      File.delete(old_json)
    end
  end
end
