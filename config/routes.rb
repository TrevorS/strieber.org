Rails.application.routes.draw do
  get '/projects', to: 'static#projects'
  get '/contact', to: 'static#contact'
  root to: 'static#index'
end
