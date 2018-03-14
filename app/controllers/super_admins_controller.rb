class SuperAdminsController < ApplicationController
respond_to :html, :json

  def index
    #calls the policy to check if authorized to acces the page
    authorize :super_admins, :index?
  end

end
