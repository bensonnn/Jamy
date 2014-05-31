(function() {
  var app = angular.module('JamyApp.factories', []);

  app.factory('trackObj', function($rootScope) {

    //need to do something about this
    $rootScope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

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
            $rootScope.safeApply();
          })

      }

      t.pause = function() {
        //sometimes, the SM2 object is not ready, watch for it, then pause it
        $rootScope.$watch(function(){return t.sound}, function(a,b){
          if (a) a.pause();
        })
        t.isplaying = false;
      }

      t.resume = function() {
        t.sound.resume();
        t.isplaying = true;
      }
    }
  })


})();