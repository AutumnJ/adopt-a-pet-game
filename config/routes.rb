Rails.application.routes.draw do
  # resources :dogs
  # resources :cats
  resources :users, only: [:show] do
    resources :cats, :dogs, only: [:index, :create, :show]
  end

  resources :cats, only: [:destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
