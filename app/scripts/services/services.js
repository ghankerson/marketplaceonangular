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
          }).
          factory('audioQueue', [ function() {
            var queue =  {
              playlist: [

              ],
              addToQueue: function(litePlayable) {
                if( this.playlist.length > 0) {
                  this.playlist.splice(0, 1);
                }
                this.playlist.push(litePlayable);
              },
              removeFromQueue: function(playable) {
                var index = this.playlist.indexOf(playable);
                this.playlist.splice(index, 1);
              }
            };

            return queue;
          }]);