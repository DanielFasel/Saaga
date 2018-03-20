# sseding all homepage pages
puts "Seeding Sites name"

Site.create!( name: "Homepage",
                validated: false)
puts "Homepage"

Site.create!( name: "Teacher",
                validated: false)
puts "Teacher"

Site.create!( name: "Student",
                validated: false)
puts "Student"

Site.create!( name: "Admin",
                validated: false)
puts "Admin"

Site.create!( name: "SuperAdmin",
                validated: false)
puts "SuperAdmin"
