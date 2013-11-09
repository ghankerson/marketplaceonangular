app.controller('homeCtl', ['$scope', 'mktplcData', 'audioQueue',
  function($scope, mktplcData, audioQueue) {
    if (typeof $scope.start === 'undefined') {
      $scope.start =0;
    }
    if (typeof $scope.rows === 'undefined') {
      $scope.rows =10;
    }
    $scope.arr = [];
    mktplcData.setParams($scope.start, $scope.rows);
    var data = mktplcData.getData();
    
    data.then(function(promise) {
      $scope.lede = promise.data[0];
      $scope.title = promise.data.feedmetadata.title;
      delete promise.data[0];
      delete promise.data.feedmetadata;
      for( var i in promise.data) {
          $scope.arr.push(promise.data[i]);
        } 
    });
    $scope.next = function () {
      $scope.start += 10;
      mktplcData.setParams($scope.start, $scope.rows);
      mktplcData.getData().then(function(promise) {
        delete promise.data.feedmetadata;
        var i = 0;
        var index;
        for( i in promise.data) {
           $scope.arr.push(promise.data[i]);
        }
      });
    };

    $scope.previous = function () {
      $scope.start -= 10;
      mktplcData.setParams($scope.start, $scope.rows);
      mktplcData.getData(function(data) {
        delete data.feedmetadata;
        var i = 0;
        var index;
        console.log(Object.keys($scope.stories).length);
         $scope.stories = data;
        console.log(Object.keys($scope.stories).length);
      });
    };

    
  }
]);
app.controller('audioCtl', ['$scope', 'audioQueue',
  function($scope, audioQueue) {
    $scope.playlist = audioQueue.playlist;
    $scope.showPlayer = function() {
      return audioQueue.playlist.length > 0;
    };
  }
]);

app.controller('storyCtl', ['$scope', '$routeParams', 'mktplcData', 'audioQueue',
  function($scope, $routeParams, mktplcData, audioQueue) {
    console.log($routeParams);
    var story = {};
    if (typeof $scope.start === 'undefined') {
      $scope.start =0;
    }
    if (typeof $scope.rows === 'undefined') {
      $scope.rows =10;
    }
    $scope.arr = [];
    mktplcData.setParams($scope.start, $scope.rows);
    var data = mktplcData.getData();
    
    data.then(function(promise) {

      // find this id
      for (var i in promise.data) {
        if(promise.data[i].id ===  $routeParams.id) {

          $scope.story = promise.data[i];
        }
      }
      
    });
    $scope.queue = function(story) {
      console.log(story);
      audioQueue.addToQueue(story);
    };
    $scope.playlist = audioQueue.playlist;
    $scope.toggle = function () {

    };

  }
]);