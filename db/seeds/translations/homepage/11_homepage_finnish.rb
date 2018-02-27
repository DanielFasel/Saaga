# seeding all homepage pages
puts "Seeding Homepage Finnish"
site = Site.find_by(name: 'Homepage')
# fetching the language of the translations
language = Language.find_by(name: 'finnish')

#fetching the default json file and parsing it
homepageFinnishPath = "#{Rails.root}/app/javascript/packs/assets/json/languages/homepage/homepage_fi.json"
homepageFinnish = JSON.parse(File.read(homepageFinnishPath))

# seeding the pages from the default json hash
homepageFinnish.each do |key, value|
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
