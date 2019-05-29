Rails.application.routes.draw do
  root "static_pages#home"
  get "static_pages/home"
  get "/help", to: "static_pages#help"
  get "/about", to: "static_pages#about"
  get "/contact", to: "static_pages#contact"

  devise_for :admins, controllers: {sessions: "admins/sessions", passwords: "admins/passwords"}

  devise_scope :admin do
    get "/admins/sign_out" => "devise/sessions#destroy"
  end

  namespace :admins do
    resources :home, only: :index
  end
  get "/blog", to: "posts#index"
  get "/blog-detail", to: "posts#show"
end
