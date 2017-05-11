class StudentpagesController < ApplicationController

  def index
    authorize :studentpages, :index?
  end

end
