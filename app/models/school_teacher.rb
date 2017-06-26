class SchoolTeacher < ApplicationRecord
  belongs_to :school
  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action

  has_many :school_teacher_teacher_specs, :dependent => :delete_all
  has_many :teacher_specs, through: :school_teacher_teacher_specs

  has_many :users, through: :teacher_specs
end
