# This Service updates the temporary json file for a given language with a new translation.
module Services
  class UpdateJsonLanguage
    def initialize(languageId, keyword, translation)
      @language = Language.find_by(id: languageId )
      @keyword = keyword
      @translation = translation
    end

    def call
      language_name = @language.name
      language_json = "#{Rails.root}/app/javascript/packs/assets/json/languages/homepage/homepage_temporary_#{language_name}.json"
      language_hash = JSON.parse(File.read(language_json))

      new_json = language_json + '.new'
      old_json = language_json + '.old'
          #
          # language_json = JSON.parse(File.read('app/javascript/packs/assets/json/languages/homepage/'+params[:selected][:site][:name]+'_'+params[:selected][:language][:name]+'.json'))
          # puts language_json
          # language_json[params[:selected][:page][:name]][params[:selected][:word][:name]]=params[:translation]
          # puts language_json
          #

      File.write(new_json, language_hash.to_json)
      File.rename(language_json, old_json)
      File.rename(new_json, language_json)
      File.delete(old_json)

          # Once translator is satisfied with translations he sends a message (within the website to the superadmin) and the superadmin controlls and updates the json file.
    end
  end
end
