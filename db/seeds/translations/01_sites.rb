# sseding all homepage pages
puts "Seeding Sites name"

Site.create!( name: "Homepage")
puts "Homepage"

Site.create!( name: "Teacher")
puts "Teacher"

Site.create!( name: "Student")
puts "Student"

Site.create!( name: "Admin")
puts "Admin"

Site.create!( name: "SuperAdmin")
puts "SuperAdmin"
