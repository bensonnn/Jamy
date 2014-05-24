module Api
	module V1
		class TracksController < ApplicationController
			# respond_to :json

			def latest_blogged
				render json: Track.latest_blogged(limit = 30, page = 1), root: false
			end

			def latest_released
				render json: Track.latest_released(limit = 30, page = 1), root: false
			end

		end
	end
end
