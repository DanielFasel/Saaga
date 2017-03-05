class ClassesController < ApplicationController

  def index
     authorize :classes, :index?
  end

end
