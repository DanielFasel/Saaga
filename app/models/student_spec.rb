class StudentSpec < ApplicationRecord
  belongs_to :user

  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action


  has_many :school_student_student_specs, :dependent => :delete_all
  has_many :school_students, through: :school_student_student_specs

  has_many :schools, through: :school_students
end
