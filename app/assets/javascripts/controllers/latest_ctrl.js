(function() {
	var app = angular.module('LatestCtrl', ['AppPlayer']);
	app.controller('LatestCtrl', ['$http','$route', function($http,$route) {
		var latest = this;
		$http.get('/api/v1/latest.json').success(function(data){
			latest.tracks = data['tracks']
		});
	}])
})();