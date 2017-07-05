(function () {
    'use strict';

    var loginService = angular.module('app', ['ngResource']);
    loginService.factory('Heroes', ['$resource',
        function ($resource) {
            return $resource('/api/login', {}, {
                query: { method: 'GET', params: {}, isArray: true }
            });
        }
    ]);
})();
