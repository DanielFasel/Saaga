class TeacherAdmin < ApplicationRecord

  belongs_to :teacher_spec

  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action

  has_many :school_admin_teacher_admins, :dependent => :delete_all
  has_many :school_admins, through: :school_admin_teacher_admins
  has_many :schools, through: :school_admins
end
