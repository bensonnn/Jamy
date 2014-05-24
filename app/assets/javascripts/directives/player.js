(function() {
	var app = angular.module('NowPlaying', ['SoundCloudObject']);
	app.directive('nowPlaying', function() {
    return {
      restrict: 'E',
      templateUrl: '../assets/now_playing.html',
      // service: 'player'
    };
  });
})();