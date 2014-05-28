
REDIS = Redis.new(:url => ENV['REDISTOGO_URL'] || 'http://localhost:6379' )