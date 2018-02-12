# Seeding all words located inside the HomepageHomepage pages
puts "Seeding words located inside the HomepageHomepage pages"
 page = Page.find_by_name('HomepageHomepage')


 page.words.create( :keyword => 'HomepageFlippedTitle')
 puts "Keyword : HomepageFlippedTitle"
