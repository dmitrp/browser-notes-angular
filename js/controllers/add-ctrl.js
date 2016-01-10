define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('AddCtrl', ['$scope', 'StorageFact', function ($scope, StorageFact) {
		var Post = {
		        currentDate: new Date().toString().substring(0, 24),
		        text: '',
		        title: '',
		        save: function() {
					var that = this;
		            StorageFact.saveStorage({title:that.title, date:that.currentDate, text:that.text});
		        }
		    };

		$scope.Post = Post;
    }]);
});