class HomeworksController < ApplicationController

  def index
    authorize :homeworks, :index?
  end

end
