# Seeding the english translations
language = Language.find_by_language('english')
puts "HomepageMenu translations in english"


word = Word.find_by_keyword('HomepageMenuLogo')
word.translations.create( :translation => 'Saaga', :language_id => language.id )
puts "Translation - Logo"

word = Word.find_by_keyword('HomepageMenuWhatIsIt')
word.translations.create( :translation => 'What is it?', :language_id => language.id )
puts "Translation - What is it?"

word = Word.find_by_keyword('HomepageMenuAsASchool')
word.translations.create( :translation => 'As a School', :language_id => language.id )
puts "Translation - As a School"

word = Word.find_by_keyword('HomepageMenuAsAStudent')
word.translations.create( :translation => 'As a Student', :language_id => language.id )
puts "Translation - As a Student"

word = Word.find_by_keyword('HomepageMenuAsATeacher')
word.translations.create( :translation => 'As a Teacher', :language_id => language.id )
puts "Translation - As a Teacher"

word = Word.find_by_keyword('HomepageMenuLogout')
word.translations.create( :translation => 'Logout', :language_id => language.id )
puts "Translation - Logout"

word = Word.find_by_keyword('HomepageMenuRegister')
word.translations.create( :translation => 'Register', :language_id => language.id )
puts "Translation - Register"
