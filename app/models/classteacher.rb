class Classteacher < Teacher

  belongs_to :teacher, optional: true
  ## optional: true needs to be though about
  
end
