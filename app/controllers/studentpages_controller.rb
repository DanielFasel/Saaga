class StudentpagesController < ApplicationController

  def index
  	#calls the policy to check if authorized to acces the page
    authorize :studentpages, :index?
  end

end
