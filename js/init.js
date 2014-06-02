require.config({
	baseUrl: '',
	
	paths: {
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
	// initialize
});