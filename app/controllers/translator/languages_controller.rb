
class Translator::LanguagesController < ApplicationController
  respond_to :html, :json


  def index
    languages = Language.get_language_hash(params[:language])
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


private

  def page_params
    params.require(:name)
  end

end
