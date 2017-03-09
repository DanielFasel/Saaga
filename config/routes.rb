Rails.application.routes.draw do

  devise_for :users, skip: [:sessions, :registrations, :passwords]

  # slected language inside of url
  scope "(:locale)", locale: /en|fi|sv/ do

    # root page
    root 'homepages#index'


    # devise routes

    as :user do

      # passwords controller
      get '/password/new', to: 'devise/passwords#new', as: :new_user_password
      get '/password/edit', to: 'devise/passwords#edit', as: :edit_user_password

      patch '/password', to: 'devise/passwords#update', as: :user_password
      put '/password', to: 'devise/passwords#update'
      post '/password', to: 'devise/passwords#create'

      # registrations controller
      get '/cancel', to: 'devise/registrations#cancel', as: :cancel_user_registration
      get '/register', to: 'devise/registrations#new', as: :new_user_registration
      get '/edit', to: 'devise/registrations#edit', as: :edit_user_registration

      patch '/users', to: 'devise/registrations#update', as: :user_registration
      put '/users', to: 'devise/registrations#update'
      delete '/users', to: 'devise/registrations#destroy'
      post '/users', to: 'devise/registrations#create'

      # sessions controller
      get 'login', to: 'devise/sessions#new', as: :new_user_session
      post 'login', to: 'devise/sessions#create', as: :user_session
      delete 'logout', to: 'devise/sessions#destroy', as: :destroy_user_session
    end

    # routes to the mainpages
    get '/homeworks', to: 'homeworks#index'
    get '/classes', to: 'classes#index'
    get '/exercises', to: 'exercises#index'
    get '/scourses', to: 'scourses#index'
    get '/tcourses', to: 'tcourses#index'
    get '/global', to: 'global#index'


    get '/', to: 'locals#change_locale', as: :change_locale
  end

end
