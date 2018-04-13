# seeding all teacher pages
puts "Seeding Teacher default/english"
site = Site.find_by(name: 'Student')
# fetching the language of the translations
language = Language.find_by(name: 'english')

#fetching the default json file and parsing it
teacherDefaultEnPath = "#{Rails.root}/app/javascript/packs/assets/languages/live/teacher/teacher_#{language.local}.json"
teacherDefaultEn = JSON.parse(File.read(teacherDefaultEnPath))

# seeding the pages from the default json hash
teacherDefaultEn.each do |key, value|
  site.pages.create(name: key)
  puts "Page: #{key}"
  page=Page.find_by(name: key)
  # seeding words of the page
  puts "-> Seeding Words of #{key}"
  value.each do |key, value|
    page.words.create(keyword: key)
    word=Word.find_by(keyword: key)
    puts " => Word: #{key}"
    # Seeding the translation
    word.translations.create(translation: value, temporary: value, language_id: language.id, validated: false)
    puts " => Translation: #{value}"
  end
end
