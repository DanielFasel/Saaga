class SchoolTeacher < ApplicationRecord
  belongs_to :school

  has_many :school_teacher_teacher_specs
  has_many :teacher_specs, through: :school_teacher_teacher_specs

  has_many :users, through: :teacher_specs
end
