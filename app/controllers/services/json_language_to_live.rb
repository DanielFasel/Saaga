# This Service updates the temporary json file for a given language with a new translation.
module Services
  class JsonLanguageToLive
    def initialize(languageId)
      @language = Language.find_by(id: languageId )
    end

    def call

      # replace live by temporary of all sites with same language.
      language_local = @language.local
      temporary_homepage_json = "#{Rails.root}/app/javascript/packs/assets/languages/temporary/homepage/homepage_temporary_#{language_local}.json"
      # temporary_teacher_json = "#{Rails.root}/app/javascript/packs/assets/languages/temporary/teacher/teacher_temporary_#{language_local}.json"
      # temporary_student_json = "#{Rails.root}/app/javascript/packs/assets/languages/temporary/student/student_temporary_#{language_local}.json"

      temporary_homepage_hash = JSON.parse(File.read(temporary_homepage_json))
      # temporary_teacher_hash = JSON.parse(File.read(temporary_teacher_json))
      # temporary_student_hash = JSON.parse(File.read(temporary_student_json))

      live_homepage_json = "#{Rails.root}/app/javascript/packs/assets/languages/live/homepage/homepage_#{language_local}.json"
      # live_teacher_json = "#{Rails.root}/app/javascript/packs/assets/languages/live/teacher/teacher_#{language_local}.json"
      # live_student_json = "#{Rails.root}/app/javascript/packs/assets/languages/live/student/student_#{language_local}.json"

      File.write(live_homepage_json, temporary_homepage_hash.to_json)
      # File.write(live_teacher_json, temporary_teacher_hash.to_json)
      # File.write(live_student_json, temporary_student_hash.to_json)

    end
  end
end
