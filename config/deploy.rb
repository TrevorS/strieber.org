# config valid only for Capistrano 3.1
lock '3.1.0'

set :application, 'strieber.org'
set :repo_url,    'http://github.com/TrevorS/strieber.org.git'
set :branch,      ENV['BRANCH_NAME'] || 'master'
set :deploy_to,   '/var/webapps/strieber.org'
set :default_env, { path: "$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH" }

# rbenv
set :rbenv_type,  :user
set :rbenv_ruby,  '2.1.1'

namespace :deploy do
  desc 'Restart application'
  after :publishing, :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end
end
