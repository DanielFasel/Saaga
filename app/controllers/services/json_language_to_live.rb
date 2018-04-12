# This Service updates the temporary json file for a given language with a new translation.
module Services
  class JsonLanguageToLive
    def initialize(languageId)
      @language = Language.find_by(id: languageId )

    end

    def call
      
    end
  end
end
