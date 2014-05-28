(function() {
	var app = angular.module('JamyApp.services', []);

  SC.initialize({
    client_id: "54124d08066b77ab0662dc6727e7bf39",
    redirect_uri: "#",
  });

  app.factory('player', function() {
    return {
      this.toggle = "hello"
    }

  });


	

})();

//  app.service('player', function() {
//    var player = this;
//    player.currentTrack = null;
//    player.currentObject = null;
    
//    this.pause = function(track) {
//      track.playing = false;
//      player.currentObject.pause();
//    }

//    this.resume = function(track) {
//      track.playing = true;
//      player.currentObject.play();
//    }


//    this.play = function(track) {
//      track.loading = true;
//      track.comments = null
//      player.currentTrack = track;
//      SC.stream("/tracks/" + track.track_id + "", 
//      {
//        ontimedcomments: function(comments){
//        track.comments = comments[0].body
//        // $scope.$apply() 
//      }
//      }  
//      ,function(sound){
//        track.playing = true;
//        player.currentObject = sound;
//        player.currentObject.play();
//        track.loading = false;
//        // $scope.$apply();
//      });
//    }

//    this.stopAllPlaying = function() {
//      if (player.currentTrack)
//        player.currentObject.pause();
//      if (player.currentTrack)
//        player.currentTrack.playing = false;
//    }

//    this.toggle = function(track) {
//      if (player.currentTrack == track && track.playing) {
//        this.pause(track);
//      } else if (player.currentTrack == track) {
//        this.resume(track);
//      } else {
//        this.stopAllPlaying();
//        this.play(track);
//      }
//    };
//  })