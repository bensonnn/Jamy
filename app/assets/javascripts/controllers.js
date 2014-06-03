(function() {
	var app = angular.module('JamyApp.controllers', ['ngSanitize','JamyApp.services','JamyApp.directives','ngTouch']);

  app.controller('BloggedCtrl', ['$http','$route','player','$scope','$rootScope','$routeParams', function($http,$route,player,$scope,$rootScope,$routeParams) {
    $scope.name = "Latest<span>Blogged</span>"
    $http.get('/api/v1/latest_blogged.json', {
      params: { page: $routeParams.page || 1 }
    }).success(function(data){
      $scope.tracks = data
    });
  }])

  app.controller('ReleasedCtrl', ['$http','$route','player','$scope','$rootScope','$routeParams', function($http,$route,player,$scope,$rootScope,$routeParams) {
    $scope.name = "Latest<span>Released</span>"
    $http.get('/api/v1/latest_released.json',  {
      params: { page: $routeParams.page || 1 }
    }).success(function(data){
      $scope.tracks = data
    });
  }])

  app.controller('PopularCtrl', ['$http','$route','player','$scope','$rootScope','$routeParams', function($http,$route,player,$scope,$rootScope,$routeParams) {
    $scope.name = "Popular"
    $http.get('/api/v1/popular.json', {
      params: { page: $routeParams.page || 1 }
    }).success(function(data){
      $scope.tracks = data
      $rootScope.tracks = data
    });
  }])

  app.controller('ActiveTabCtrl', function($location,$scope) {
    $scope.$on('$routeChangeSuccess', function() {
      $scope.tab = $location.path();
    })
  })
  
})();