(function() {
	var app = angular.module('JamyApp.services', ['JamyApp.initializers','JamyApp.factories']);

  app.service('player', function($rootScope,trackObj) {
    var p = $rootScope;
    p.currentTrack = null;

    var resume = function() {
      p.soundObject.play();
    };

    p.pause = function() {
      p.currentTrack.pause();
    };

    p.play = function(track) {
        console.log('I was called')
        if (p.currentTrack) p.currentTrack.pause();
        p.currentTrack = new trackObj(track)
        p.currentTrack.play();
        // var t = new track
        // console.log(t)
        // SC.streamStopAll();
        // p.soundObject ? p.soundObject.pause() : null;
        // track.loading = true;
        // SC.stream("/tracks/" + track.track_id,
        //   {
        //     ontimedcomments: function(comments){
        //       track.comments = comments[0].body
        //       $rootScope.$apply(); 
        //     }
        //   }, function(sound) {
        //         SC.disconnect();
        //         p.currentTrackId = track.track_id;
        //         p.soundObject = sound;
        //         p.playing = true;
        //         track.loading = false;
        //         if (track.track_id == p.currentTrackId) {
        //           SC.streamStopAll();
        //           p.soundObject.play();
        //         } else {
        //           return;
        //         }
        //      })

       } 

  });

})();