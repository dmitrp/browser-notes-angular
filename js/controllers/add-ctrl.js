define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('AddCtrl', ['$scope', function ($scope) {
		var Post = {
		        currentDate: new Date().toString().substring(0, 24),
		        text: '',
		        title: '',
		        getStorage: function() {
		            var initialData = JSON.parse(localStorage.getItem('posts'));
		            if (!initialData) {
		                initialData = [];
		            }
		            return initialData;
		        },
		        saveStorage: function() {
		            var data = Post.getStorage();
		            data.push({title:this.title, date:this.currentDate, text:this.text});
		            localStorage.setItem('posts', JSON.stringify(data));
		        }
		    };

		$scope.Post = Post;
    }]);
});