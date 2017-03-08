class ApplicationController < ActionController::Base

  include Pundit
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  # To allow other values
  before_filter :configure_permitted_parameters, if: :devise_controller?


  # redirects after Sign-in.
  def after_sign_in_path_for(user)
    if user.is_a?(Student)
      homeworks_url
    elsif user.is_a?(Teacher)
      classes_url
    end
  end


  protected

    # Checks if receiving data and type from form then makes sure no other type was used.
    def configure_permitted_parameters
      if params.key?(:user) && params[:user].key?(:type)
      raise "YOU SHALL NOT PASS!" unless params[:user][:type].in?(['Student', 'Teacher'])
      end
      devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:type, :email, :password, :password_confirmation) }
    end


end
