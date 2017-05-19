class ApplicationController < ActionController::Base

  include Pundit
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :set_locale

  # To allow other values
  before_filter :configure_permitted_parameters, if: :devise_controller?

  before_filter :set_user_region

  # redirects after Sign-in.
  def after_sign_in_path_for(user)
    if user.is_a?(Student)
      student_url
    elsif user.is_a?(Teacher)
      teacher_url
    end
  end

  # redirects after Sign-out.
  def after_sign_out_path_for(user)
    new_user_session_path
  end














  protected

    # Checks if receiving data and type from form then makes sure no other type was used.
    def configure_permitted_parameters

      if params.key?(:user) && params[:user].key?(:type) && params[:user].key?(:region)

        raise "YOU SHALL NOT PASS!" unless params[:user][:type].in?(['Student', 'Teacher'])
        raise "invalid language" unless params[:user][:region].in?(['en','fi','sv'])

      end

      devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :givenname, :familyname, :type, :email, :password, :password_confirmation, :region) }
    end




    private

      def set_locale
        I18n.locale = params[:locale] || I18n.default_locale
      end


      def default_url_options(option = {})
        { locale: I18n.locale }
      end

      def set_user_region
        I18n.locale = current_user.region if user_signed_in?
      end

end

