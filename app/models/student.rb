class Student < User
	
  belongs_to :user, optional: true
  ## optional: true needs to be though about

  has_many :normalclass, through: :normalclass_student
  has_many :normalclass_student

end
