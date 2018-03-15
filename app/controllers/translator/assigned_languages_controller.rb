class Translator::AssignedLanguagesController < ApplicationController
  respond_to :html, :json


  def index
    @user=current_user
    @lang=@user.languages.all
    #Sorting languages alphabetically so the front end doesn't have issues
    @lang.sort_by{ |l| l.name.downcase }
    respond_with(@lang)
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
