class LocalsController < ApplicationController

  skip_before_action :authenticate_user!, :only => [:change_locale]
  def change_locale
    l = params[:locale].to_s.strip.to_sym
    l = I18n.default_locale unless I18n.available_locales.include?(l)
    redirect_to request.referer || root_url
  end
end

