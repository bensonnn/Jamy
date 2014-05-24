class Blog < ActiveRecord::Base
  has_many :tracks
  validates :url, :regex, presence: true

  include Sidekiq::Worker

  def perform
    Blog.fetch_tracks!
  end

  def self.fetch_tracks!
    blogs = Blog.all
    blogs.each do |blog|
      blog.parse_tracks
    end
  end

  def parse_tracks
    self.track_srcs.each do |src|
      Track.create(blog_id: self.id, src: src)
    end
  end

  def track_srcs
    doc = Nokogiri::HTML(open(self.url.to_s))
    doc.search('iframe').map{|x| x.attributes['src'].value unless x.attributes['src'].nil? }.compact
  end
end
