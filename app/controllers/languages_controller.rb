class LanguagesController < ApplicationController
  respond_to :html, :json
  # to allow visiting this page without being logged in.
  skip_before_action :authenticate_user!, :only => [:pages]


  def pages

    @requested=Page.find_by_page_title(page_params)
    @words=@requested.words
    @translations = []

    @translations = @words.map do |words|
      words.translations.first
    end

    respond_with(@translations)
  end

private
  def page_params

    params.require(:name)

  end

end
