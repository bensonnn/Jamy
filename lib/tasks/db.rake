namespace :db do
  desc "TODO"
  task populate_blog: :environment do
    Blog.create!(url: "http://itsallcaps.com", title: "It's All Caps", regex: 'soundcloud.com\/tracks\/(\d+)')
  end
end
