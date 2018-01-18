# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#School and related tables
2.times do |i|
  School.create!(name: "dsh#{i}"
              )
  @school = School.last
  SchoolStudent.create!(school_id: @school.id)
  SchoolTeacher.create!(school_id: @school.id)
  SchoolAdmin.create!(school_id: @school.id)
  puts "School: #{@school.name}"
end




Language.create!(language: "english")

Language.create!(language:"finnish")
Language.create!(language:"swedish")

#Users and related tables

#translator


User.create!(username: "Tran1",
              givenname: "Tran1",
              familyname: "Dupont1",
              region: "en",
              type: "Translator",
              email:"translator1@english.com",
              password: "123456",
              password_confirmation: "123456",
              :languages => Language.where(:language => ['english','finnish'])
              )


User.create!(username: "Tran2",
            givenname: "Tran2",
            familyname: "Dupont2",
            region: "en",
            type: "Translator",
            email:"translator2@english.com",
            password: "123456",
            password_confirmation: "123456",
            :languages => Language.where(:language => ['english','swedish'])
            )

#student

20.times do |i|
  User.create!(username:  "Tom#{i}",
              givenname: "Tom#{i}",
              familyname: "Smith#{i}",
              region: "en",
              type: "Student",
              email: "student#{i}@english.com",
              password:              "123456",
              password_confirmation: "123456"
              )
  @user = User.last
  StudentSpec.create!(user_id: @user.id)
  @sts = StudentSpec.last
  SchoolStudentStudentSpec.create!(student_spec_id: @sts.id, school_student_id: 1)
end

#student2
20.times do |i|
  User.create!(username:  "Marcus#{i}",
              givenname: "Marcus#{i}",
              familyname: "Aurelius#{i}",
              region: "sv",
              type: "Student",
              email: "student#{i}@swedish.com",
              password:              "123456",
              password_confirmation: "123456"
              )
  @user = User.last
  StudentSpec.create!(user_id: @user.id)
  @sts = StudentSpec.last
  SchoolStudentStudentSpec.create!(student_spec_id: @sts.id, school_student_id: 2)
end


#teacher
4.times do |i|
  User.create!(username:  "Kim#{i}",
              givenname: "Kim#{i}",
              familyname: "Smith#{i}",
              region: "fi",
              type: "Teacher",
              email: "teacher#{i}@finnish.com",
              password:              "123456",
              password_confirmation: "123456"
              )
  @user = User.last
  TeacherSpec.create!(user_id: @user.id)
  @sts = TeacherSpec.last
  SchoolTeacherTeacherSpec.create!(teacher_spec_id: @sts.id, school_teacher_id: 1)
end

#adminteacher
2.times do |i|
  User.create!(username:  "John#{i}",
              givenname: "John#{i}",
              familyname: "Smith#{i}",
              region: "en",
              type: "Teacher",
              email: "adminteacher#{i}@english.com",
              password:              "123456",
              password_confirmation: "123456"
              )
  @user = User.last
  TeacherSpec.create!(user_id: @user.id)
  @tsp = TeacherSpec.last
  TeacherAdmin.create!(teacher_spec_id: @tsp.id)
  @tad = TeacherAdmin.last
  SchoolTeacherTeacherSpec.create!(teacher_spec_id: @tsp.id, school_teacher_id: 1+i)
  SchoolAdminTeacherAdmin.create!(teacher_admin_id: @tad.id, school_admin_id: 1+i)
end

#double adminteacher
2.times do |i|
  User.create!(username:  "Marc#{i}",
              givenname: "Marc#{i}",
              familyname: "Pittet#{i}",
              region: "en",
              type: "Teacher",
              email: "doubleadminteacher#{i}@english.com",
              password:              "123456",
              password_confirmation: "123456"
              )
  @user = User.last
  TeacherSpec.create!(user_id: @user.id)
  @tsp = TeacherSpec.last
  TeacherAdmin.create!(teacher_spec_id: @tsp.id)
  @tad = TeacherAdmin.last
  2.times do |x|
    SchoolTeacherTeacherSpec.create!(teacher_spec_id: @tsp.id, school_teacher_id: 1+x)
    SchoolAdminTeacherAdmin.create!(teacher_admin_id: @tad.id, school_admin_id: 1+x)
  end
end

#admin
2.times do |i|
  User.create!(username:  "Ben#{i}",
              givenname: "Ben#{i}",
              familyname: "Tailor#{i}",
              region: "fi",
              type: "Administrator",
              email: "administrator#{i}@finnish.com",
              password:              "123456",
              password_confirmation: "123456"
              )
  @user = User.last
  AdminSpec.create!(user_id: @user.id)
  @asp = AdminSpec.last
  AdminSpecSchoolAdmin.create!(admin_spec_id: @asp.id, school_admin_id: 1+i)
end
