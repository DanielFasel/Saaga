class SchoolAdmin < ApplicationRecord

  belongs_to :school

# :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action

# Teacher admin
  has_many :school_admin_teacher_specs, :dependent => :delete_all
  has_many :teacher_specs, through: :school_admin_teacher_specs
  has_many :users, through: :teacher_specs

#Administrator Admin
  has_many :admin_spec_school_admins, :dependent => :delete_all
  has_many :admin_specs, through: :admin_spec_school_admins
  has_many :users, through: :admin_specs

end
