Rails.application.routes.draw do

  devise_for :users, skip: [:sessions, :registrations, :passwords]

  # slected language inside of url
  scope "(:locale)", locale: /#{I18n.available_locales.join('|')}/ do


        # devise routes
    as :user do
      # passwords controller
      get '/password/new', to: 'devise/passwords#new', as: :new_user_password
      get '/password/edit', to: 'devise/passwords#edit', as: :edit_user_password
      patch '/password', to: 'devise/passwords#update', as: :user_password
      put '/password', to: 'devise/passwords#update'
      post '/password', to: 'devise/passwords#create'
      # registrations controller
      get '/cancel', to: 'users/registrations#cancel', as: :cancel_user_registration
      get '/register', to: 'users/registrations#new', as: :new_user_registration
      get '/edit', to: 'users/registrations#edit', as: :edit_user_registration
      patch '/users', to: 'users/registrations#update', as: :user_registration
      put '/users', to: 'users/registrations#update'
      delete '/users', to: 'users/registrations#destroy'
      post '/users', to: 'users/registrations#create'
      # sessions controller
      get '/login', to: 'devise/sessions#new', as: :new_user_session
      post '/login', to: 'devise/sessions#create', as: :user_session
      delete '/logout', to: 'devise/sessions#destroy', as: :destroy_user_session
    end


    # Students
    resources :welcome_students, only: [:index]
    resources :students, only: [:index]
    # Student namspaced folder for all resources only used by a Student
    namespace :student do
    end


    # Teachers
    resources :welcome_teachers, only: [:index]
    resources :teachers, only: [:index]
    # Teacher namspaced folder for all resources only used by a Teacher
    namespace :teacher do
    end


    # SuperAdmins
    resources :super_admins, only: [:index]
    # SuperAdmin namspaced folder for all resources only used by a SuperAdmin
    namespace :super_admin do
      scope module: 'general' do
      end
      namespace :translator do
        #Resources concerning the translator that are needed by a superAdmin
        resources :translator_languages, only: [:index]
        resources :json_languages
        resources :site_validations, only: [:index]
      end
    end


    # Translators
    resources :welcome_translators, only: [:index]
    resources :translators, only: [:index]
    # Translator namspaced folder for all resources only used by a Translator or only concern a Translator
    namespace :translator do
      # Full language hash
      resources :languages, only: [:index]
      #Languages assigned to the Translator
      resources :assigned_languages, only: [:index]
      # Validating completed Languages
      resources :validate_languages, only: [:update]
      # Updating Translations
      patch '/translations', to: 'translations#update'

    end


    # General controllers. They are being scoped for organisation purpuses but it doesn't append anything to the url
    scope module: 'general' do
      resources :user_infos, only: [:index]
    end



    #Schools of Teacher Will need to be rethought and adapted to the new RESTfull way.
    resources :schools
    get '/teacheradminschools', to: 'teacher_admins#schools'
    get '/schoolstudents/:id', to: 'school_students#index'


    get '/*path', to: 'homepages#index', format: false

  end

   root to: redirect("/#{I18n.default_locale}", status: 302), as: :redirected_root
    get "/*path", to: redirect("/#{I18n.default_locale}/%{path}", status: 302), constraints: {path: /(?!(#{I18n.available_locales.join("|")})\/).*/}, format: false

end
