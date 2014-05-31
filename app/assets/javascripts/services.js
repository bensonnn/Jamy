(function() {
	var app = angular.module('JamyApp.services', ['JamyApp.initializers','JamyApp.factories']);

  app.service('player', function($rootScope,trackObj) {
    
    var p = $rootScope;
    p.currentTrackId = null;
    p.soundObject = null;
    p.playing = false;

    var resume = function() {
      p.soundObject.play();
      p.playing = true;
    };

    var pause = function() {
      p.soundObject.pause();
      p.playing = false;
    };

    var play = function(track) {
        p.soundObject ? p.soundObject.pause() : null;
        track.loading = true;
        SC.stream("/tracks/" + track.track_id,
          {
            ontimedcomments: function(comments){
              track.comments = comments[0].body
              $rootScope.$apply() 
            }
          }, function(sound){
            p.currentTrackId = track.track_id;
            p.soundObject = sound;
            p.playing = true;
            track.loading = false;
            p.soundObject.play();
            $rootScope.$apply();
        });
      };

    this.toggle = function(track) {
      if (this.currentTrackId == track.track_id && this.playing)
        pause();
      else if (this.currentTrackId == track.track_id) 
        resume();
      else
        play(track);
    }
  });
})();