'use strict';

angular.module('mktplcAngularApp.controllers', ['mktplcAngularApp.services', 'ngSanitize']).
				controller('MainCtrl', ['$scope', 'mktplcData', function($scope, mktplcData) {
						// Instantiate an object to store your scope data in (Best Practices)
						$scope.data = {};
						mktplcData.then(function(resp) {
							delete resp.data.feedmetadata;
							$scope.data.rows = resp.data;
						});
					}]).
				controller('StoryCtl', ['$scope', 'mktplcData', '$routeParams', function($scope, mktplcData, $routeParams) {
					$scope.data = {};
					mktplcData.then(function(resp) {
						delete resp.data.feedmetadata;
						for (var i in resp.data) {
							if((resp.data[i].id ===  $routeParams.id)) {
								$scope.story = resp.data[i];
							}
						}
					});
				}]);
