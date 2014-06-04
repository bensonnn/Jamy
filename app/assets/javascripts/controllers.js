(function() {

	var app = angular.module('JamyApp.controllers', ['ngSanitize','JamyApp.services','JamyApp.directives','ngTouch','infinite-scroll']);
  
  app.controller('BloggedCtrl', ['$http','$route','player','$scope','$rootScope','$routeParams', function($http,$route,player,$scope,$rootScope,$routeParams) {
    $scope.name = "Latest<span>Blogged</span>"
    $scope.location = '/api/v1/latest_blogged.json'
    Jamy.helpers.initialize($scope)
    $scope.load = function() {Jamy.helpers.fetch($scope,$http);}
  }])

  app.controller('ReleasedCtrl', ['$http','$route','player','$scope','$rootScope','$routeParams', function($http,$route,player,$scope,$rootScope,$routeParams) {
    $scope.name = "Latest<span>Released</span>"
    $scope.location = '/api/v1/latest_released.json'
    Jamy.helpers.initialize($scope)
    $scope.load = function() {Jamy.helpers.fetch($scope,$http);}
  }])

  app.controller('PopularCtrl', ['$http','$route','player','$scope','$rootScope','$routeParams', function($http,$route,player,$scope,$rootScope,$routeParams) {
    $scope.name = "Popular";
    $scope.location = '/api/v1/popular.json'
    Jamy.helpers.initialize($scope)
    $scope.load = function() {Jamy.helpers.fetch($scope,$http);}
  }])

  app.controller('ActiveTabCtrl', function($location,$scope) {
    $scope.$on('$routeChangeSuccess', function() {
      $scope.tab = $location.path();
    })
  })
  
})();