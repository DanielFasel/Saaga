class SchoolStudent < ApplicationRecord
  belongs_to :school

  has_many :school_student_student_specs
  has_many :student_specs, through: :school_student_student_specs
  
  has_many :users, through: :student_specs

end
