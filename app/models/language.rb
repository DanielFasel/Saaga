class Language < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :translations,  :dependent => :delete_all
end
