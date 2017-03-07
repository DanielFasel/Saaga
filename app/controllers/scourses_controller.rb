class ScoursesController < ApplicationController

  def index
    authorize :scourses, :index?
  end

end
