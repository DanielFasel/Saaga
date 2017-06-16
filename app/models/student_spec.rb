class StudentSpec < ApplicationRecord
  belongs_to :user

  has_many :school_student_student_specs
  has_many :school_students, through: :school_student_student_specs

  has_many :schools, through: :school_students
end
