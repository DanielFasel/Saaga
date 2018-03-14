class TeachersController < ApplicationController

  def index
    #calls the policy to check if authorized to acces the page
    authorize :teachers, :index?
  end

end
