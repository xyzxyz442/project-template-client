require.config({
	baseUrl: '',
	
	paths: {
		app: 'js/app',
		
		jquery: 'lib/jquery/jquery.min',
		backbone: 'lib/backbone',
		underscore: 'lib/underscore-min',
	},
	
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	},
	
	map: {
		'*': {
			'css': 'lib/require/css.min',
			'text': 'lib/require/text.min'
		}
	}
});

require(['jquery', 'backbone'], function($, Backbone) {
	require(['js/app', 'js/config'], function(App, Config) {
		Application = App;
		Application.config = Config;
		
		Application.initialize();
	});
});