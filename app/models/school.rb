class School < ApplicationRecord

  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action

  has_one :school_student, :dependent => :delete
  has_one :school_teacher, :dependent => :delete
  has_one :school_admin,   :dependent => :delete
end
