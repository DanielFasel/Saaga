Rails.application.routes.draw do

  devise_for :users

  scope "(:locale)", locale: /en|fi/ do

    # root page
    root 'homepages#index'


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
