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
//= require turbolinks
//= require_tree .

Jamy = Ember.Application.create();
Jamy.ApplicationAdapter = DS.FixtureAdapter.extend({});

Jamy.Router.map(function() {
	
})

Jamy.ApplicationRoute = Ember.Route.extend({
	model: function() {
			return this.store.findAll('track')
	}
})



// Jamy.Store = DS.Store.extend({

// })

//# Override the default adapter with the `DS.ActiveModelAdapter` which
//# is built to work nicely with the ActiveModel::Serializers gem.
//Jamy.ApplicationAdapter = DS.ActiveModelAdapter.extend({

//create some fixtures

Jamy.Track = DS.Model.extend({
  title: DS.attr( 'string' ),
  trackId: DS.attr('number')
});

