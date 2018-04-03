# This Service Validate the language (Meaning if the translator has completed or still needs to complete the translations for a langauge)
module Services
  class ValidateLanguage
    def initialize(languageId, value)
      @language = Language.find_by(id: languageId )
      @value = value
    end

    def call
      @language.update_attributes(validated: @value)
      return @language
    end
  end
end
