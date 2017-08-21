Rails.application.routes.draw do

  devise_for :users

  root to: 'posts#index'

  get 'about' => 'pages#about', as: :about
  get '/api/comments/:id', to: 'comments#show', as: :commentsJson

  resources :posts do
    resources :comments
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
