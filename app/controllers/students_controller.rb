class StudentsController < ApplicationController

  def index
  	#calls the policy to check if authorized to acces the page
    authorize :students, :index?
  end

end
