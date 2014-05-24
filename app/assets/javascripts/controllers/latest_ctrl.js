(function() {
	var app = angular.module('LatestCtrl', ['AppPlayer']);
  app.controller('LatestCtrl', ['$http','$route','player', function($http,$route,player) {
    var latest = this;
    console.log(player)
    // if (Player.currentTrack == null) { 
    $http.get('/api/v1/latest.json').success(function(data){
      latest.tracks = data['tracks']
    // }
    });
  }])

})();