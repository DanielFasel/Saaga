class TranslatorpagesController < ApplicationController

  def index
    #calls the policy to check if authorized to acces the page
    authorize :translatorpages, :index?
  end

end
