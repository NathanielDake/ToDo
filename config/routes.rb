Rails.application.routes.draw do
  get 'welcome/index'

  get 'welcome/about'

  #namespace separates API routes from rest of application routes
  namespace :api, defaults: { format: :json } do
    resources :users
  end
end
