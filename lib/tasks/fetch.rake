namespace :fetch do
  desc "TODO"
  task async: :environment do
    Blog.perform_async
  end

end
