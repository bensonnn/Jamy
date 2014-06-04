module Api
	module V1
		class TracksController < ApplicationController

			def latest_blogged
				render json: Track.latest_blogged(limit = 10, params["page"].to_i), root: false
			end

			def latest_released
				render json: Track.latest_released(limit = 10, params["page"].to_i), root: false
			end

			def popular
				render json: Track.popular(limit = 10, params["page"].to_i), root: false
			end
			
		end
	end
end
