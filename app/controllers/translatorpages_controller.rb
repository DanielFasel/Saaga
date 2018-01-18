class TranslatorpagesController < ApplicationController
respond_to :html, :json

  def index
    #calls the policy to check if authorized to acces the page
    authorize :translatorpages, :index?
  end

  def languages
    @user=current_user
    @lang=@user.languages.all

    respond_with(@lang)
  end

end
