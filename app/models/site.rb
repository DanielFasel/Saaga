class Site < ApplicationRecord
  has_many :pages, :dependent => :delete_all
  accepts_nested_attributes_for :pages

  def self.get_site_hash
    
  end


end
