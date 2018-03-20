class Translator::ValidateLanguagesController < ApplicationController
  respond_to :html, :json


  def index

  end

  def show
  end

  def create
  end

  def update
    puts 'reached controller'
    puts params
    Language.validate_language(params)

  end

  def destroy
  end

end
