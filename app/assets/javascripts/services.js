(function() {
	var app = angular.module('JamyApp.services', ['JamyApp.initializers','JamyApp.factories']);

  app.service('player', function($rootScope,trackObj) {
    var p = $rootScope;
    p.currentTrack = null;

    p.resume = function() {
      p.currentTrack.resume();
    };

    p.pause = function() {
      p.currentTrack.pause();
    };

    p.play = function(track) {
      if (p.currentTrack) p.currentTrack.pause();
      if (p.currentTrack && p.currentTrack.id == track.track_id) {
        p.currentTrack.resume();
      } else {
        p.currentTrack = new trackObj(track)
        p.currentTrack.play();
      } 
    } 

  });

})();