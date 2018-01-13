class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable



  # :dependent => :delete simply deletes them, if a more complicated deleting procedure is needed :dependent => :destroy should be used since it will call the destroy action

  has_one :student_spec, :dependent => :delete
  has_one :teacher_spec, :dependent => :delete
  has_one :admin_spec, :dependent => :delete
  has_and_belongs_to_many :languages

end
