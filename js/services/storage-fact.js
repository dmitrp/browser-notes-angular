define(['./module'], function (services) {
    'use strict';
    services.factory('StorageFact', [function () {
        var service = {};
        var tableName = 'posts';

        service.getStorage = function() {
            var initialData = JSON.parse(localStorage.getItem(tableName));
            if (!initialData) {
                initialData = [];
            }
            return initialData;
        };

        service.saveStorage = function(record) {
            var data = this.getStorage();
            data.push(record);
            localStorage.setItem(tableName, JSON.stringify(data));
        };

        service.syncStorage = function(records) {
            localStorage.setItem(tableName, JSON.stringify(records));
        };

        return service;
    }]);
});