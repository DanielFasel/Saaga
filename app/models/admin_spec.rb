class AdminSpec < ApplicationRecord

  belongs_to :user

  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action

  has_many :admin_spec_school_admins, :dependent => :delete_all
  has_many :school_admins, through: :admin_spec_school_admins
  has_many :schools, through: :school_admins

end
