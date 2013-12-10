'use strict';

angular.module('mktplcAngularApp.controllers', ['mktplcAngularApp.services', 'ngSanitize']).
controller('MainCtrl', ['$scope', 'mktplcData',
	function($scope, mktplcData) {
		// Instantiate an object to store your scope data in (Best Practices)
		$scope.data = {};
		mktplcData.then(function(resp) {
			delete resp.data.feedmetadata;
			$scope.data.rows = resp.data;
		});
	}
]).
controller('StoryCtl', ['$rootScope', '$scope', 'mktplcData', '$routeParams', 'audioQueue',
	function($rootScope, $scope, mktplcData, $routeParams, audioQueue) {
		$scope.data = {};
		mktplcData.then(function(resp) {
			delete resp.data.feedmetadata;
			for (var i in resp.data) {
				if ((resp.data[i].id === $routeParams.id)) {
					$scope.story = resp.data[i];
				}
			}
		});
    $scope.queue = function(story) {
      var playable = {
          title: story.title,
          url: story.audio.url
        };
      audioQueue.addToQueue(playable);
      $rootScope.$broadcast('queue', playable);
    };
    $scope.playlist = audioQueue.playlist;
	}
]).
controller('AudioCtl', ['$scope', 'audioQueue', '$sce', function($scope, audioQueue, $sce) {
  $scope.fu = 'bar';
  $scope.$on('queue', function() {
      $scope.audio = {
          title: audioQueue.playlist[0].title,
          url: $sce.trustAsResourceUrl(audioQueue.playlist[0].url)
        };
    });
}]);