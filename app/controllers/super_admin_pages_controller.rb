class SuperAdminPagesController < ApplicationController
respond_to :html, :json

  def index
    #calls the policy to check if authorized to acces the page
    authorize :superAdminPages, :index?
  end

end
