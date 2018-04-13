# seeding all teacher pages
puts "Seeding Teacher Finnish"
site = Site.find_by(name: 'Teacher')
# fetching the language of the translations
language = Language.find_by(name: 'finnish')

#fetching the default json file and parsing it
teacherFiPath = "#{Rails.root}/app/javascript/packs/assets/languages/live/teacher/teacher_#{language.local}.json"
teacherFi = JSON.parse(File.read(teacherFiPath))

# seeding the pages from the default json hash
teacherFi.each do |key, value|
  puts "Page: #{key}"
  # seeding words of the page
  puts "-> Words of #{key}"
  value.each do |key, value|
    word=Word.find_by(keyword: key)
    puts " => Word: #{key}"
    # Seeding the translation
    puts " =>Seeding Finnish Translation:"
    word.translations.create(translation: value, temporary: value, language_id: language.id, validated: false)
    puts value
  end
end
