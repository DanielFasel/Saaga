class Page < ApplicationRecord
has_many :words, :dependent => :delete_all
end
