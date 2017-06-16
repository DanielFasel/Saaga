class AdminSpecSchoolAdmin < ApplicationRecord
  belongs_to :admin_spec
  belongs_to :school_admin
end
