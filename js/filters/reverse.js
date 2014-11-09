define(['./module'], function (filters) {
'use strict';
	return filters.filter('reverse', [function() {
    	return function(items) {
      		return items.slice().reverse();
    	}
    }]);
});