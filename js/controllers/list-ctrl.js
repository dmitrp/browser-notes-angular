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
	            this.posts.splice(this.posts.length - index - 1, 1);
				StorageFact.syncStorage(List.posts);
	        },
	        editPost: function(index) {
	            this.posts[this.posts.length - index - 1].isEdited = true;
	        },
	        savePost: function(index) {
	            this.posts[this.posts.length - index - 1].isEdited = false;
				StorageFact.syncStorage(List.posts);
	        },
	        morePosts: function() {
	            this.postLimit += 3;
	        }
	    };

	    List.getStorage();

	    $scope.List = List;
    }]);
});