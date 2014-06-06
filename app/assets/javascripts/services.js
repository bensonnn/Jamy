(function() {
	var app = angular.module('JamyApp.services', ['JamyApp.controllers','JamyApp.initializers','JamyApp.factories']);

  app.service('player', ['$rootScope','trackObj', function($rootScope,trackObj, ActiveTabCtrl) {
    var p = $rootScope;
    p.currentTrack = null;
    p.tracks = []
    
    p.resume = function() {
      p.currentTrack.resume();
    };

    p.pause = function() {
      p.currentTrack.pause();
    };

    p.play = function(track,tracks) {
      if (tracks) p.tracks = tracks
      if (p.currentTrack) p.currentTrack.pause();
      if (p.currentTrack && p.currentTrack.id == track.track_id) {
        p.currentTrack.resume();
      } else {
        p.currentTrack  = new trackObj(track)
        p.currentTrack.play();
      } 
    } 

    p.next = function() {
      idx = p.tracks.map(function(track) {return track.track_id}).indexOf(p.currentTrack.id)
      p.play(p.tracks[idx + 1])      
    }

    p.prev = function() {
      idx = p.tracks.map(function(track) {return track.track_id}).indexOf(p.currentTrack.id)
      p.play(p.tracks[idx - 1])
    }

  }]);

})();