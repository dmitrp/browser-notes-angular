'use strict';

angular.module('myApp.controllers', [])
  .controller('ListCtrl', ['$scope', function($scope) {
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
            this.posts.splice(List.posts.length - index - 1, 1);
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
  }])

  .controller('AddCtrl', ['$scope', function($scope) {
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
