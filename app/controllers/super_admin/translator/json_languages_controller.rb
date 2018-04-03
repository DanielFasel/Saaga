class SuperAdmin::Translator::JsonLanguagesController < ApplicationController
  respond_to :html, :json


  def index
  end

  def show
  end

  def create
    #languageId = params
    languageId = params[:languageId]
    language = Services::ValidateLanguage.new(languageId, false).call
    puts "Hello"
    render json: language

    #create json...
  end

  def update
  end

  def destroy
  end

end
