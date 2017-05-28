class Teacher < User

  belongs_to :user, optional: true
  ## optional: true needs to be though about

end
