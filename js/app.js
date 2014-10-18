'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller: 'AddCtrl'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
