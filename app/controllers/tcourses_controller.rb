class TcoursesController < ApplicationController

  def index
    authorize :tcourses, :index?
  end

end
