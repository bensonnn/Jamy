// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require angular-resource
//= require_tree .

(function() {
	var app = angular.module('Jamy', ['AppPlayer']);
	app.directive('latest', ['$http', function($http) {
		return {
			restrict: 'E',
			templateUrl: 'latest.html',
			controller: function() {
				var latest = this;
				
				$http.get('/api/v1/latest.json').success(function(data){
					latest.tracks = data['tracks']
				});

			},
			controllerAs : "latest"
		};


	}])
})();

(function() {
	var app = angular.module('AppPlayer', ['SoundCloudObject']);
	app.controller('Player', function($scope) {
		var player = this;
		player.currentTrack = null;
		player.currentObject = null;
		
		this.pause = function(track) {
			track.playing = false;
			player.currentObject.pause();
		}

		this.resume = function(track) {
			track.playing = true;
			player.currentObject.play();
		}


		this.play = function(track) {
			track.loading = true;
			track.playing = true;
			track.comments = "ehllo"
			// $scope.$watch('comments', function(old) {
			// 	console.log(old)
			// });
				player.currentTrack = track;
				SC.stream("/tracks/" + track.track_id + "", 
				{
  				ontimedcomments: function(comments){
    			track.comments = comments[0].body
    			$scope.$apply() }
  			}  
  			,function(sound){
					player.currentObject = sound;
					player.currentObject.play();
					track.loading = false;
					$scope.$apply();
				});
		}

		this.stopAllPlaying = function() {
			if (player.currentTrack)
				player.currentObject.pause();
			if (player.currentTrack)
				player.currentTrack.playing = false;
		}

		this.toggle = function(track) {
			if (player.currentTrack == track && track.playing) {
				this.pause(track);
			} else if (player.currentTrack == track) {
				this.resume(track);
			} else {
				this.stopAllPlaying();
				this.play(track);
			}
		};
	})
})();


(function() {
	var app = angular.module('SoundCloudObject', []);
	SC.initialize({
    client_id: "54124d08066b77ab0662dc6727e7bf39",
    redirect_uri: "#",
	});
})();


