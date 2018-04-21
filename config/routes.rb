Rails.application.routes.draw do

  # Not currently using:
  # resources :users, only: [:show] do
  #   resources :cats, :dogs, only: [:index, :create, :show]
  # end

  resources :cats, only: [:create]

  get'/cats/random', to: 'cats#random'
  
  resources :dogs, only: [:create]

    get'/dogs/random', to: 'dogs#random'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
