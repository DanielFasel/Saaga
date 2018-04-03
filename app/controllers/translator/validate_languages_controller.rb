class Translator::ValidateLanguagesController < ApplicationController
  respond_to :html, :json


  def index

  end

  def show
  end

  def create
  end

  def update
    languageId = params[:id]
    Services::ValidateLanguage.new(languageId, true).call
  end

  def destroy
  end

end
