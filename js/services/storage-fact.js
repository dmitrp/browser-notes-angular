define(['./module'], function (services) {
    'use strict';
    services.factory('StorageFact', [function () {
        var service = {};

        service.getStorage = function() {
            var initialData = JSON.parse(localStorage.getItem('posts'));
            if (!initialData) {
                initialData = [];
            }
            return initialData;
        };

        service.saveStorage = function(record) {
            var data = this.getStorage();
            data.push(record);
            localStorage.setItem('posts', JSON.stringify(data));
        };

        return service;
    }]);
});