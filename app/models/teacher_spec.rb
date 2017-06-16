class TeacherSpec < ApplicationRecord

  belongs_to :user

  has_many :school_teacher_teacher_specs
  has_many :school_teachers, through: :school_teacher_teacher_specs
  has_many :schools, through: :school_teachers

  has_many :school_admin_teacher_specs
  has_many :school_admins, through: :school_admin_teacher_specs
  has_many :schools, through: :school_admins
  
end
