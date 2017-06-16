class AdminSpec < ApplicationRecord

  belongs_to :user

  has_many :admin_spec_school_admins
  has_many :school_admins, through: :admin_spec_school_admins
  has_many :schools, through: :school_admins

end
