var Jamy = {}

Jamy.helpers = {
  initialize: function(scope) {
    scope.page = 1;
    scope.loading = false;
    scope.tracks = [];
  },
  fetch: function(scope,$http) {
    scope.loading = true
    $http.get(scope.location, {
      params: { page: scope.page }
    }).success(function(data){
      scope.tracks = scope.tracks.concat(data)
      scope.loading = false
    });
    scope.page++;
  }
}