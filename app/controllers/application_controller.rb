class ApplicationController < ActionController::Base

  include Pundit
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :set_locale

  # To allow other values
  before_action :configure_permitted_parameters, if: :devise_controller?

  before_action :set_user_region

  # redirects after Sign-in.
  def after_sign_in_path_for(user)

    #If user is a student
    if user.is_a?(Student) && user.sign_in_count>1
      student_url
    elsif user.is_a?(Student) && user.sign_in_count==1
      welcomestudent_path

    #If user is a teacher
    elsif user.is_a?(Teacher) && user.sign_in_count>1
      teacher_url
    elsif user.is_a?(Teacher) && user.sign_in_count==1
      welcometeacher_path

    #If user is a translator
    elsif user.is_a?(Translator) && user.sign_in_count>1
        translator_url
    elsif user.is_a?(Translator) && user.sign_in_count==1
        welcometranslator_path
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
        raise "YOU SHALL NOT PASS!" unless params[:user][:type].in?(['Student', 'Teacher', 'Translator'])
        raise "invalid language" unless params[:user][:region].in?(['en','fi','sv'])
      end

      devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :givenname, :familyname, :type, :email, :password, :password_confirmation, :region) }
    end


  private

      #setting locals
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
