class Word < ApplicationRecord
  belongs_to :page

  has_many :translations, :dependent => :delete_all
end
