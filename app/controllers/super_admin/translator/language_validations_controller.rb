class SuperAdmin::Translator::LanguageValidationsController < ApplicationController
  respond_to :html, :json


  def index
    languages=Language.all
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
