class SchoolStudent < ApplicationRecord
  belongs_to :school

  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action


  has_many :school_student_student_specs, :dependent => :delete_all
  has_many :student_specs, through: :school_student_student_specs

  has_many :users, through: :student_specs

end
