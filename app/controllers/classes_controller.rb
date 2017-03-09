class ClassesController < ApplicationController

  def index
    #calls the policy to check if authorized to acces the page
    authorize :classes, :index?
  end

end
