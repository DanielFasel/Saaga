class TranslatorsController < ApplicationController
respond_to :html, :json

  def index
    #calls the policy to check if authorized to acces the page
    authorize :translators, :index?
  end

  def languages
    @user=current_user
    @lang=@user.languages.all
    #Sorting languages alphabetically so the front end doesn't have issues
    @lang.sort_by{ |l| l.name.downcase }
    respond_with(@lang)
  end

end
