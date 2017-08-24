Rails.application.routes.draw do
  devise_for :users

  root to: 'posts#index'

  get 'about' => 'pages#about', as: :about

  resources :posts do
    resources :comments
  end
end
