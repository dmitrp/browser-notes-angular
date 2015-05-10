define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('ListCtrl', ['$scope', function ($scope) {
	    var List = {
	        posts: [],
	        postLimit: 3,
	        getStorage: function() {
	            this.posts = JSON.parse(localStorage.getItem('posts'));
	            if (!this.posts) {
	                this.posts = [];
	            }
	        },
	        syncStorage: function() {
	            localStorage.setItem('posts', JSON.stringify(List.posts));
	        },
	        removePost: function(index) {
	            this.posts.splice(this.posts.length - index - 1, 1);
	            this.syncStorage();
	        },
	        editPost: function(index) {
	            this.posts[this.posts.length - index - 1].isEdited = true;
	        },
	        savePost: function(index) {
	            this.posts[this.posts.length - index - 1].isEdited = false;
	            localStorage.setItem('posts', JSON.stringify(this.posts));
	        },
	        morePosts: function() {
	            this.postLimit += 3;
	        }
	    };
	    List.getStorage();

	    $scope.List = List;
    }]);
});