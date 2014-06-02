define(function(require) {
	'use strict';
	
	var Router = Backbone.Router.extend({
		routes: {
			'': 'routing'
		},
		
		initialize: function() {
			
		},
		
		routing: function(params) {
			var _this = this;
			
			var isRouteToStartPage = true;
			
			if(!_.isUndefined(params)) {
				if(!_.isUndefined(params.page) && params.page != '') {
					if(_.isFunction(_this[params.page])) {
						if(Parameters.getParameter('PAGE_STARTED')) {
							isRouteToStartPage = false;
							
							_this[params.page](params);
						}
					}
				}
			}
			
			if(isRouteToStartPage) {
				Parameters.setParameter('PAGE_STARTED', true);
				
				_this.navigate('?page=' + Application.config.startPage);
			}
		},
		
		navigate: function(route) {
			if(Backbone.history.fragment == route) {
				Backbone.history.loadUrl(Backbone.history.fragment);
			} else {
				Backbone.Router.prototype.navigate.call(this, route, { trigger: true, replace: true });
			}
		}
	});
	
	Router.prototype.instance = function() {
		return new Router();
	};
	
	return Router;
});