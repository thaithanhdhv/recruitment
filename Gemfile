source "https://rubygems.org"
git_source(:github){|repo| "https://github.com/#{repo}.git"}

ruby "2.5.1"

gem "rails", "~> 5.2.2.1"
gem "mysql2", ">= 0.4.4", "< 0.6.0"
gem "puma", "~> 3.11"
gem "jbuilder", "~> 2.5"
gem "dotenv-rails"
gem "bootsnap", ">= 1.1.0", require: false
gem "devise"
gem "config"
gem "rswag-api"
gem "rswag-ui"
gem "rack-cors"
gem "kaminari"
gem "activerecord-import"
gem "ransack"
gem "ffaker"
gem "carrierwave"
gem "carrierwave-base64"
gem 'turbolinks'
gem "bootstrap", '~>4.0.0'
gem 'jquery-rails'
gem "mini_racer"

group :development, :test do
  gem "pry-rails"
  gem "rails_best_practices"
end

group :dev, :staging, :development, :test do
  gem "rspec-rails", "~> 3.7"
  gem "rswag-specs"
  gem "webmock"
end

group :development do
  gem "bullet"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem "database_cleaner"
  gem "rails-controller-testing"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
