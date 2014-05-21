module Api
	module V1
		class TracksController < ApplicationController
			respond_to :json
			def latest
				respond_with([{
											 title:"Tear you down",
											 track_id: '136603251',
											 playing: false,
											 loading: false,
											 artwork_url: 'http://i1.sndcdn.com/artworks-000071832943-6ayvyt-large.jpg?30a2558'
											},
											{
											 title:"Let go",
											 track_id: '106176078',
											 playing: false,
											 loading: false,
											 artwork_url: 'http://i1.sndcdn.com/artworks-000055714093-xm29i3-large.jpg?30a2558'
											}])
			end
		end
	end
end
