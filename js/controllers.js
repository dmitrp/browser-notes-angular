'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ListCtrl', ['$scope', function($scope) {
    function getStorage() {
        var initialData = JSON.parse(localStorage.getItem('obj'));
        if (!initialData) {
            initialData = [];
        }
        return initialData;
    };

    $scope.posts = getStorage()

    function syncStorage() {
        localStorage.setItem('obj', JSON.stringify($scope.posts));
    };

    $scope.remove = function(index) {
        $scope.posts.splice(index, 1);
        syncStorage();
    };
  }])

  .controller('AddCtrl', ['$scope', function($scope) {
    function getCurrentDate() {
        var d = new Date();
        return d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
    };

    function getpostText() {
        return document.getElementById('postText').value;
    };

    function getpostTitle() {
        return document.getElementById('postTitle').value;
    };

    function getStorage() {
        var initialData = JSON.parse(localStorage.getItem('obj'));
        if (!initialData) {
            initialData = [];
        }
        return initialData;
    };

    $scope.save = function() {
        var data = getStorage();
    	data.push({title:getpostTitle(), date:getpostText(), text:getCurrentDate()});
        localStorage.setItem('obj', JSON.stringify(data));
    };

  }]);
