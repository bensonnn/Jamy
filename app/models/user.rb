class User < ActiveRecord::Base
end

class CreateUser
	def self.create 
		User.create(name: 'dan')
	end
	end

