class Translator::AssignedLanguagesController < ApplicationController
  respond_to :html, :json


  def index
    languages=Translator.get_languages(current_user)
    respond_with(languages)
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
