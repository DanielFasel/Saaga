# seeding all homepage pages
puts "Seeding Homepage default/english"
site = Site.find_by(name: 'Homepage')
language = Language.find_by_language('english')

#fetching the default json file and parsing it
homepageDefaultEnPath = "#{Rails.root}/app/javascript/packs/assets/json/languages/homepage/homepage_default_en.json"
homepageDefaultEn = JSON.parse(File.read(homepageDefaultEnPath))

# seeding the pages from the default json hash
homepageDefaultEn.each do |key, value|
  site.pages.create(name: key, completed: 0, total: 0)
  puts "Page: #{key}"
  page=Page.find_by(name: key)
  # seeding words of the page
  puts "-> Seeding Words of #{key}"
  value.each do |key, value|
    page.words.create(keyword: key)
    word=Word.find_by(keyword: key)
    puts " => Word: #{key}"

    word.translations.create(translation: value, temporary: value, language_id: language.id, validated: false)
    puts " => Translation: #{value}"
  end
end
