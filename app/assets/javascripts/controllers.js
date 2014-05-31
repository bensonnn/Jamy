(function() {
	var app = angular.module('JamyApp.controllers', ['ngSanitize','JamyApp.services','ngTouch']);

  app.controller('BloggedCtrl', ['$http','$route','player','$scope', function($http,$route,player,$scope) {
    $scope.page = 1
    $scope.name = "Latest<span>Blogged</span>"
    $http.get('/api/v1/latest_blogged.json', {
      params: { page: $scope.page }
    }).success(function(data){
      $scope.tracks = data
    });
  }])

  app.controller('ReleasedCtrl', ['$http','$route','player','$scope', function($http,$route,player,$scope) {
    $scope.page = 1
    $scope.name = "Latest<span>Released</span>"
    $http.get('/api/v1/latest_released.json',  {
      params: { page: $scope.page }
    }).success(function(data){
      $scope.tracks = data
    });
  }])

  app.controller('PopularCtrl', ['$http','$route','player','$scope', function($http,$route,player,$scope) {
    $scope.page = 1
    $scope.name = "Popular"
    $http.get('/api/v1/popular.json', {
      params: { page: $scope.page }
    }).success(function(data){
      $scope.tracks = data
    });
  }])

  app.controller('ActiveTabCtrl', function($location,$scope) {
    $scope.$on('$routeChangeSuccess', function() {
      $scope.tab = $location.path();
    })
  })
  
})();