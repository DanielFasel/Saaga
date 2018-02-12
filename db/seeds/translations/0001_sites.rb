# sseding all homepage pages
puts "Seeding Sites name"

Site.create!( name: "Homepage",
              completed: 0,
              total: 0)
puts "Homepage"

Site.create!( name: "Teacher",
              completed: 0,
              total: 0)
puts "Teacher"

Site.create!( name: "Student",
              completed: 0,
              total: 0)
puts "Student"

Site.create!( name: "Admin",
              completed: 0,
              total: 0)
puts "Admin"
