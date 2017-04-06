# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



#student
User.create!(username:  "TomS",
             givenname: "Tom",
             familyname: "Smith",
             region: "en",
             type: "Student",
             school: "",
             email: "student@english.com",
             password:              "123456",
             password_confirmation: "123456"
             )


#student2
User.create!(username:  "MarcusA",
             givenname: "Marcus",
             familyname: "Aurelius",
             region: "sv",
             type: "Student",
             school: "",
             email: "student@swedish.com",
             password:              "123456",
             password_confirmation: "123456"
             )

#teacher
User.create!(username:  "KimS",
             givenname: "Kim",
             familyname: "Smith",
             region: "fi",
             type: "Teacher",
             school: "",
             email: "teacher@finnish.com",
             password:              "123456",
             password_confirmation: "123456"
             )


