# seeding all student pages
puts "Seeding Student Finnish"
site = Site.find_by(name: 'Student')
# fetching the language of the translations
language = Language.find_by_language('finnish')

#fetching the default json file and parsing it
studentFiPath = "#{Rails.root}/app/javascript/packs/assets/json/languages/student/student_fi.json"
studentFi = JSON.parse(File.read(studentFiPath))

# seeding the pages from the default json hash
studentFi.each do |key, value|
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
