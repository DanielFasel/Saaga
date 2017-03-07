Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'homepages#index'

  get '/homeworks', to: 'homeworks#index'
  get '/classes', to: 'classes#index'
  get '/exercises', to: 'exercises#index'
  get '/scourses', to: 'scourses#index'
  get '/tcourses', to: 'tcourses#index'
  get '/global', to: 'global#index'

end
