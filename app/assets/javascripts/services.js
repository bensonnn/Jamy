(function() {
	var app = angular.module('JamyApp.services', []);

  SC.initialize({
    client_id: "54124d08066b77ab0662dc6727e7bf39",
    redirect_uri: "#",
  });

  app.service('player', function($rootScope) {
    var p = this;
    this.currentTrackId = null;
    this.soundObject = null;
    this.playing = false;

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