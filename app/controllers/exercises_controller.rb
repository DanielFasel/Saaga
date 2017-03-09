class ExercisesController < ApplicationController

  def index
    authorize :exercises, :index?
  end

end
