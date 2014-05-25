namespace :sidekiq do
  desc "TODO"
  task start: :environment do
    system 'bundle exec sidekiq'
  end
end
