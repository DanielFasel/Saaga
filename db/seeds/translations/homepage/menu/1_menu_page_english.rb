# Seeding the english translations
 word = Word.find_by_keyword('HomepageMenuLogo')
 language = Language.find_by_language('english')
  puts "english"
 word.translations.create( :translation => 'Saaga',
                           :language_id => language.id )

 puts "translation"
