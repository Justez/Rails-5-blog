Rails.application.routes.draw do

  devise_for :users

  root to: 'blog/posts#index'

  scope module: 'blog' do
    get 'about' => 'pages#about', as: :about
    
    resources :posts do
      resources :comments
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
