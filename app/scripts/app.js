var taskListApp = angular.module("TaskListApp", ['firebase', 'ui.router', 'ngRoute']);

taskListApp.controller('Homepage.controller', ['$scope', '$firebase', function($scope,$firebase) {
  var tasksData = new Firebase("https://radiant-fire-5902.firebaseio.com");
  var sync = $firebase(tasksData);
  // download the data into a local object
  $scope.tasks = sync.$asArray(); //modify here

  $scope.task = {completed: false}; //this is only for creation
  $scope.addTask = function() {
	$scope.tasks.$add($scope.task);
	$scope.task = {};
}
  $scope.markCompleted = function(currentTask) {
	currentTask.completed = true;
	$scope.tasks.$save(currentTask);
}
}])

taskListApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('active', {
      url: "/",
      templateUrl: "templates/active.html",
      controller: "Homepage.controller"
    })
   	$stateProvider
	    .state('completed', {
	      url: "/completed",
	      templateUrl: "templates/completed.html",
	      controller: "Homepage.controller"
	    })
});
