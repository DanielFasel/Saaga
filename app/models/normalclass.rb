class Normalclass < ApplicationRecord

  has_many :student, through: :normalclass_student
  has_many :normalclass_student





end
