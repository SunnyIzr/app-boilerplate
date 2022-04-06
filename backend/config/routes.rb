require 'sidekiq/web'

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      get '/home' => 'static_pages#home'
      get '/login' => 'static_pages#login'
      get '/logout' => 'static_pages#logout'

      mount Sidekiq::Web => '/sidekiq'
    end
  end
end
