var myPostModule = angular.module('myPostApp', []);

myPostModule.controller('PostController', function($scope) {
    function getStorage() {
        var initialData = JSON.parse(localStorage.getItem('obj'));
        if (!initialData) {
            initialData = [];
        }
        return initialData;
    };

    function syncStorage() {
        localStorage.setItem('obj', JSON.stringify($scope.posts));
    };

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

    $scope.posts = getStorage();

    $scope.save = function() {
        $scope.posts.push({title:getpostTitle(), date:getpostText(), text:getCurrentDate()});
        syncStorage();
    };

    $scope.remove = function(index) {
        $scope.posts.splice(index, 1);
        syncStorage();
    };
});
