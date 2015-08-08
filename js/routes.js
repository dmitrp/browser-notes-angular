define(['./app'], function (app) {
     'use strict';
     return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListCtrl'
        });
        $routeProvider.when('/add', {
            templateUrl: 'partials/add.html',
            controller: 'AddCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/list'
        });
     }]);
});