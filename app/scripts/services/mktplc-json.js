/* global angular */
'use strict';
angular.module('mktplcAngularApp.services', [])
        .factory('mktplcData', function($http) {
            var promise = $http({
                method: 'JSONP',
                params: {
                    start: 0,
                    rows: 10,
                    callback: 'JSON_CALLBACK'
                  },
                  cache: true,
                  url: 'http://www.marketplace.org/rss/app/jsonp'
                });
            return promise;
          });