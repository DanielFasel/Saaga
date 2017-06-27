class SchoolAdminTeacherAdmin < ApplicationRecord
  belongs_to :school_admin
  belongs_to :teacher_admin
end
