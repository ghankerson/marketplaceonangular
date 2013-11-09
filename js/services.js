/* global angular */
angular.module('mktplc.services', []).
  factory('mktplcData', ['$http', function ($http) {
    'use strict';
    var url;
    var promise = {
      setParams: function (start, rows) {
        this.start = start;
        this.rows = rows;
        this.url = 'http://www.marketplace.org/rss/app/jsonp?start=' + this.start + '&rows=' + this.rows;
      },
      getData: function(callback) {
        return $http({
          method: 'JSONP',
          cache: true, 
          url: this.url + '&callback=JSON_CALLBACK'
        });
      }

  };
  return {
    data: {
      items: []
    }, 
    setParams: function(start, rows) {
      promise.setParams(start, rows);
    },
    getData : function(callback) {
      return promise.getData();
    }

  };
  }])
  .factory('audioQueue', [ function() {
    var queue =  {
      playlist: [

      ],
      addToQueue: function(playable) {
        console.log(playable);
        if( this.playlist.length > 0) {
          this.playlist.splice(0, 1);
        }
        this.playlist.push(playable);
      },
      removeFromQueue: function(playable) {
        var index = this.playlist.indexOf(playable);
        this.playlist.splice(index, 1);
      }
    };

    return queue;
  }])
  .factory('player', [ function() {

  }]);