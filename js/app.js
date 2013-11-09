/* global angular */
/* global console */
var app = angular.module('mktplc', ['mktplc.services', 'infinite-scroll']);
app.config(['$routeProvider',
  function($routeProvider) {
    'use strict';
    $routeProvider.when('/', {
      templateUrl: 'views/home.tpl.html',
      controller: 'homeCtl'
    }).when('/node/:id', {
      templateUrl: 'views/story.tpl.php',
      controller: 'storyCtl'
    }).otherwise(
      {
        redirectTo: "/"
      }
    );
  }
]);