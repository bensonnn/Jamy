(function() {
	var app = angular.module('JamyApp.controllers', ['ngSanitize','JamyApp.services','ngTouch']);

  app.controller('BloggedCtrl', ['$http','$route','player', function($http,$route, player) {
    var latest = this;
    this.player = player
    this.page = 1
    latest.name = "Latest<span>Blogged</span>"
    $http.get('/api/v1/latest_blogged.json', {
      params: { page: latest.page }
    }).success(function(data){
      latest.tracks = data
    });
  }])

  app.controller('ReleasedCtrl', ['$http','$route','player', function($http,$route,player) {
    var latest = this;
    this.player = player
    this.page = 1
    this.name = "Latest<span>Released</span>"
    $http.get('/api/v1/latest_released.json',  {
      params: { page: latest.page }
    }).success(function(data){
      latest.tracks = data
    });
  }])

  app.controller('PopularCtrl', ['$http','$route','player', function($http,$route, player) {
    var latest = this;
    this.player = player
    this.page = 1
    this.name = "Popular"
    $http.get('/api/v1/popular.json', {
      params: { page: latest.page }
    }).success(function(data){
      latest.tracks = data
    });
  }])

})();