Rails.application.routes.draw do

  # Not currently using:
  # resources :users, only: [:show] do
  #   resources :cats, :dogs, only: [:index, :create, :show]
  # end

  resources :cats, only: [:create, :index]

  get'/cats/random', to: 'cats#random'
  
  resources :dogs, only: [:create]

  get'/dogs/random', to: 'dogs#random'

end
