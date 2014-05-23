// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require angular
//= require angular-resource
//= require angular-route
//= require_tree .

(function() {
	var app = angular.module('Jamy', ['ngRoute','LatestCtrl', 'NowPlaying']);
	app.config(function ($routeProvider) {
	  $routeProvider
	  .when('/', {
	    templateUrl: '../assets/track.html',
	    controller: 'LatestCtrl'
	  })
	  .when('/latest/blogged', {
	    templateUrl: '../assets/track.html',
	    controller: 'LatestCtrl'
	  })
	  .when('/latest/released', {
	    templateUrl: '../assets/track.html',
	    controller: 'LatestCtrl'
	  })
	  .when('/about', {
	    templateUrl: '../assets/about.html',
	  })
	  .when('/free', {
	    templateUrl: '../assets/free_stuff.html',
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
	});
})();







(function() {
	var app = angular.module('SoundCloudObject', []);
	SC.initialize({
    client_id: "54124d08066b77ab0662dc6727e7bf39",
    redirect_uri: "#",
	});
})();


