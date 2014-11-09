define([
     'angular',
     'angular-route',
     './controllers/index',
     './filters/index'
 ], function (ng) {
     'use strict';
 
     return ng.module('app', [
         'app.controllers',
         'app.filters',
         'ngRoute'
     ]);
});