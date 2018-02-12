# Seeding the english translations
language = Language.find_by_language('english')
puts "HomepagHomepage translations in english"


word = Word.find_by_keyword('HomepageFlippedTitle')
word.translations.create( :translation => 'Flipped Learning',
                          :temporary => "Flipped Learning",
                          :language_id => language.id,
                          :validated => false,
                           )
puts "Translation - Flipped Learning"
