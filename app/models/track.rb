class Track < ActiveRecord::Base
  belongs_to :blog
  validates :track_id, presence: true
  validates :track_id, uniqueness: true

  before_validation :parse_src_into_track

  def parse_src_into_track
    if match_track
      track = Track.SC_client.get("/tracks/#{match_track[1]}")
      self.track_id       = track.id
      self.title          = track.title
      self.artist         = track.user.username
      self.genre          = track.genre
      self.playcount      = track.playback_count
      self.purchase_url   = track.purchase_url
      self.permalink_url  = track.permalink_url
      self.uploaded       = track.created_at
      self.artwork_url    = track.artwork_url
    end
  end

  def self.SC_client
    SoundCloud.new(:client_id => '54124d08066b77ab0662dc6727e7bf39')
  end

  def regex
    self.blog.regex
  end

  def match_track
    self.src.match(/#{regex}/) unless src.nil?
  end

  def self.latest_blogged limit, page
    Track.order(created_at: :desc).limit(limit).offset(page * limit - limit)
  end

  def self.latest_released limit, page
    Track.order(uploaded: :desc).limit(limit).offset(page * limit - limit)
  end


end
