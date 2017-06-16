class School < ApplicationRecord
  has_one :school_student
  has_one :school_teacher
  has_one :school_admin
end
