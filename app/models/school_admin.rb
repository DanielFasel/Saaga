class SchoolAdmin < ApplicationRecord

  belongs_to :school

# Teacher admin
  has_many :school_admin_teacher_specs
  has_many :teacher_specs, through: :school_admin_teacher_specs
  has_many :users, through: :teacher_specs

#Administrator Admin
  has_many :admin_spec_school_admins
  has_many :admin_specs, through: :admin_spec_school_admins
  has_many :users, through: :admin_specs

end
