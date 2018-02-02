Rails.application.routes.draw do

  devise_for :users, skip: [:sessions, :registrations, :passwords]




  # slected language inside of url
  scope "(:locale)", locale: /#{I18n.available_locales.join('|')}/ do





    # resources
    resources :schools




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





      # root page
      root 'homepages#index'

    # Teacher, Translator and Student Welcome page after first sign in
    get '/welcomestudent', to: 'student_welcomes#index'
    get '/welcometeacher', to: 'teacher_welcomes#index'
    get '/welcometranslator', to: 'translator_welcomes#index'

    # routes to the student, translator and teacher spa
    get '/student', to: 'studentpages#index'
    get '/teacher', to: 'teacherpages#index'
    get '/translator', to: 'translatorpages#index'


    #School creation routes


    #Schools of Teacher
    get '/teacheradminschools', to: 'teacher_admins#schools'
    get '/schoolstudents/:id', to: 'school_students#index'


    get '/languages', to: 'languages#get'
    post '/languages', to: 'languages#post'


    #Translator side
    #Languages of Translator
    get '/translatorlanguages', to: 'translatorpages#languages'

    get '/*path', to: 'homepages#index', format: false



  end



end
