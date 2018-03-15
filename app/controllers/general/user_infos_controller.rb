class General::UserInfosController < ApplicationController
respond_to :html, :json

  def index
    respond_with(current_user)
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

end
