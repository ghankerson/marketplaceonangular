'use strict';

angular.module('mktplcAngularApp', [
	'ngCookies',
	'ngSanitize',
	'ngRoute',
	'mktplcAngularApp.controllers'
])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/node/:id', {
				templateUrl: 'views/story.tpl.html',
				controller: 'StoryCtl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
