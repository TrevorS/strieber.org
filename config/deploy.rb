lock '3.4.0'

set :application, 'strieber.org'
set :repo_url,    'http://github.com/TrevorS/strieber.org.git'
set :branch,      ENV['BRANCH_NAME'] || 'master'
set :deploy_to,   '/var/www/rails/strieber.org'
set :default_env, { path: "$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH" }

set :port, 1010

# rbenv
set :rbenv_type,  :user
set :rbenv_ruby,  '2.1.5'

namespace :deploy do

  desc 'Symlink secret key'
  after :updating, :symlink_config do
    on roles(:app) do
      execute :rm, release_path.join('config', 'secrets.yml')
      execute :ln, '-s', shared_path.join('secrets.yml'), release_path.join('config', 'secrets.yml')
    end
  end

  desc 'Restart application'
  after :publishing, :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp', 'restart.txt')
    end
  end
end
