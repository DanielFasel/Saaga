class TeacherpagesController < ApplicationController

  def index
    #calls the policy to check if authorized to acces the page
    authorize :teacherpages, :index?
  end

end
