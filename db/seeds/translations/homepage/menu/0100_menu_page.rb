# Seeding all words located inside the HomepageMenu pages
puts "Seeding words located inside the HomepageMenu pages"
 page = Page.find_by_name('HomepageMenu')


 page.words.create( :keyword => 'HomepageMenuLogo')
 puts "Keyword : HomepageMenuLogo"

 page.words.create( :keyword => 'HomepageMenuAsATeacher')
 puts "Keyword : HomepageMenuAsATeacher"

 page.words.create( :keyword => 'HomepageMenuAsAStudent')
 puts "Keyword : HomepageMenuAsAStudent"

 page.words.create( :keyword => 'HomepageMenuAsASchool')
 puts "Keyword : HomepageMenuAsASchool"

 page.words.create( :keyword => 'HomepageMenuWhatIsIt')
 puts "Keyword : HomepageMenuWhatIsIt"

 page.words.create( :keyword => 'HomepageMenuLogout')
 puts "Keyword : HomepageMenuLogout"

 page.words.create( :keyword => 'HomepageMenuRegister')
 puts "Keyword : HomepageMenuRegister"
