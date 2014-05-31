(function() {
  var app = angular.module('JamyApp.factories', []);

  app.factory('trackObj', function($rootScope) {

    return function(track) {
      var t = this
      t.id = track.track_id;
      t.loading = false;
      t.comment = "";
      t.sound = null
      t.isplaying = false;

      t.play = function() {
        t.loading = true
        SC.stream("/tracks/" + t.id, 
          
          {
            ontimedcomments: function(comments){
              t.comments = comments[0].body
              $rootScope.$apply(); 
            }
          },
                  
          function(sound) {
            t.sound = sound;
            t.sound.play();
            t.loading = false;
            t.isplaying = true;
          })

      }

      t.pause = function() {
        t.sound.pause();
        t.isplaying = false;
      }

      t.resume = function() {
        t.sound.resume();
        t.isplaying = true;
      }
    }
  })


})();