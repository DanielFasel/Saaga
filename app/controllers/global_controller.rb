class GlobalController < ApplicationController

  def index
    authorize :global, :index?
  end


end
