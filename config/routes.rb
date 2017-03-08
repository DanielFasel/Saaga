Rails.application.routes.draw do

  devise_for :users

  # root page
  root 'homepages#index'


  # routes to the mainpages
  get '/homeworks', to: 'homeworks#index'
  get '/classes', to: 'classes#index'
  get '/exercises', to: 'exercises#index'
  get '/scourses', to: 'scourses#index'
  get '/tcourses', to: 'tcourses#index'
  get '/global', to: 'global#index'

end
