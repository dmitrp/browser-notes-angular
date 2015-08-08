define(['app'], function (app) {
'use strict';
	return app.filter('reverse', [function() {
    	return function(items) {
      		return items.slice().reverse();
    	}
    }]);

	return app;
});
