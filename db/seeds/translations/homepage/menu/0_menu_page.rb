# Seeding all words located inside the HomepageMenu pages
puts "Seeding words located inside the HomepageMenu pages"
 page = Page.find_by_page_title('HomepageMenu')

 page.words.create( :keyword => 'HomepageMenuLogo')
 puts "word : Logo"
