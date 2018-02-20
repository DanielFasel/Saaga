class UserinfosController < ApplicationController
respond_to :html, :json

def get

  @user=current_user

  respond_with(@user)
end

end
