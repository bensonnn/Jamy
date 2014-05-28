(function() {
	var app = angular.module('JamyApp.controllers', ['ngSanitize','JamyApp.services']);
  

   app.service('player', [function() {
    this.toggle = function() {
      return "hello"
    } 
  }]);

  app.controller('BloggedCtrl', ['$http','$route','player', function($http,$route, player) {
    var latest = this;
    latest.name = "Latest<span>Blogged</span>"
    $http.get('/api/v1/latest_blogged.json', {
      params: { page: 1 }
    }).success(function(data){
      latest.tracks = data
    });
  }])

  app.controller('ReleasedCtrl', ['$http','$route', function($http,$route) {
    var latest = this;
    this.name = "Latest<span>Released</span>"
    $http.get('/api/v1/latest_released.json',  {
      params: { page: 1 }
    }).success(function(data){
      latest.tracks = data
    });
  }])

  app.controller('PopularCtrl', ['$http','$route','player', function($http,$route, player) {
    var latest = this;
    this.hello = player.toggle;
    console.log(player.toggle());
    this.name = "Popular"
    $http.get('/api/v1/popular.json', {
      params: { page: 1 }
    }).success(function(data){
      latest.tracks = data
    });
  }])

  app.controller('Sample', ['$http','$route','player', function($http,$route, player) {
    var latest = this;
    this.hello = player.toggle();
    
  }])


})();