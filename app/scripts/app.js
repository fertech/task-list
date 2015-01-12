var taskList = angular.module("TaskList", ['firebase', 'ui.router']);

taskList.controller('Homepage.controller', ['$scope', '$firebase', function($scope,$firebase) {
  var fireData = new Firebase("https://radiant-fire-5902.firebaseio.com/");
  var sync = $firebase(fireData);
  // download the data into a local object
  $scope.data = sync.$asObject();
}])
