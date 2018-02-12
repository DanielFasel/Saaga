# sseding all homepage pages
puts "Seeding Homepage pages"

site = Site.find_by_name('Homepage')

site.pages.create( :name => "HomepageMenu",
              completed: 0,
              total: 0)
puts "homepage_menu"

site.pages.create( :name => "HomepageHomepage",
              completed: 0,
              total: 0)
puts "AboutUs"
