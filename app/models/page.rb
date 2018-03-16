class Page < ApplicationRecord
  belongs_to :site

  has_many :words, :dependent => :delete_all
  accepts_nested_attributes_for :words

  def self.get_page_hash
  end
end
