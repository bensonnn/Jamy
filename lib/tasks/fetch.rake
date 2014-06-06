namespace :fetch do
  desc "TODO"
  task async: :environment do
    puts "Fetching super fresh tracks..."
    Blog.perform_async
  end

end
