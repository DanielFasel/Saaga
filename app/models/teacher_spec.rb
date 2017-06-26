class TeacherSpec < ApplicationRecord

  belongs_to :user

  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action


  has_many :school_teacher_teacher_specs, :dependent => :delete_all
  has_many :school_teachers, through: :school_teacher_teacher_specs
  has_many :schools, through: :school_teachers

  has_many :school_admin_teacher_specs, :dependent => :delete_all
  has_many :school_admins, through: :school_admin_teacher_specs
  has_many :schools, through: :school_admins

end
