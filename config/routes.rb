Rails.application.routes.draw do

  #namespace separates API routes from rest of application routes
  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :lists
    end

    resources :lists, only: [] do
      resources :items, only: [:create, :update]
    end

    resources :items, only: [:destroy, :show]

  end
end
