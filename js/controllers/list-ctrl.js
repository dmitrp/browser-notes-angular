define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('ListCtrl', ['$scope', 'StorageFact', function ($scope, StorageFact) {
	    var List = {
	        posts: [],
	        postLimit: 3,
	        getStorage: function() {
	            this.posts = StorageFact.getStorage();
	        },
	        removePost: function(index) {
	            this.posts.splice(this.calculatePosition(index), 1);
				StorageFact.syncStorage(List.posts);
	        },
	        editPost: function(index) {
	            this.posts[this.calculatePosition(index)].isEdited = true;
	        },
	        savePost: function(index) {
	            this.posts[this.calculatePosition(index)].isEdited = false;
				StorageFact.syncStorage(List.posts);
	        },
	        morePosts: function() {
	            this.postLimit += 3;
	        },
			calculatePosition: function(index) {
				return this.posts.length - index - 1;
			}
	    };

	    List.getStorage();

	    $scope.List = List;
    }]);
});