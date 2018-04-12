class Translator::TranslationsController < ApplicationController
  respond_to :html, :json


  def index
  end

  def show
  end

  def create
  end

  def update
    languageId=Language.find_by(name: params[:selected][:language][:name]).id
    # Fetch the Id of the word being translated
    keyword = params[:selected][:word][:name]
    word=Word.find_by_keyword(keyword)
    # Updates different fields depending on type as well as different response
    if params[:type]=="temporary"
      translation = word.translations.find_by(language_id: languageId)
      translation.temporary = params[:translation]
      translation.user_id = current_user.id
      translation.validated = false
      translation.save
      render json: translation
    elsif params[:type]=="translation"
      translation = word.translations.find_by(language_id: languageId)
      translation.translation = params[:translation]
      translation.user_id = current_user.id
      translation.validated=true
      translation.save
      render json: translation

      # Updates the temporary json of the translated language
      Services::UpdateJsonLanguage.new(languageId, keyword, params[:translation]).call
    end
  end

  def destroy
  end

end
