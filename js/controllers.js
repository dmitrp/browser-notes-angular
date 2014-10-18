'use strict';

angular.module('myApp.controllers', [])
  .controller('ListCtrl', ['$scope', function($scope) {
    var List = {
        posts: [],
        postLimit: 3,
        getStorage: function() {
            this.posts = JSON.parse(localStorage.getItem('obj'));
            if (!this.posts) {
                this.posts = [];
            }
        },
        syncStorage: function() {
            localStorage.setItem('obj', JSON.stringify(List.posts));
        },
        removePost: function(index) {
            List.posts.splice(List.posts.length - index - 1, 1);
            List.syncStorage();
        },
        morePosts: function() {
            List.postLimit += 3;
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
            var initialData = JSON.parse(localStorage.getItem('obj'));
            if (!initialData) {
                initialData = [];
            }
            return initialData;
        },
        saveStorage: function() {
            var data = Post.getStorage();
            data.push({title:this.title, date:this.currentDate, text:this.text});
            console.log(data);
            localStorage.setItem('obj', JSON.stringify(data));
        }
    };

        $scope.Post = Post;
  }]);
