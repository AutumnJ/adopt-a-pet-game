Rails.application.routes.draw do
  # resources :dogs
  # resources :cats
  resources :users, only: [:show] do
    resources :cats, :dogs, only: [:index, :create, :show, :destroy]
  end

  resources :cats, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
