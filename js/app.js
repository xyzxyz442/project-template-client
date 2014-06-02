define(function(require) {
	'use strict';
	
	var Application = {
		views: {},
		
		router: null,
		
		config: null,
		
		initialize: function() {
			var _this = this;
			
			require(['app/router'], function(Router) {
				Application.router = Router.prototype.instance();
				
				Backbone.history.start({ pushState: true, root: Application.config.rootUrl });
			});
		}
	};
	
	return Application;
});