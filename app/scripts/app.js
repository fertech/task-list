var taskListApp = angular.module("TaskListApp", ['firebase', 'ui.router', 'ngRoute']);

taskListApp.controller('Homepage.controller', ['$scope', '$firebase', function($scope,$firebase) {
  var tasksData = new Firebase("https://radiant-fire-5902.firebaseio.com");
  var sync = $firebase(tasksData);
  // download the data into a local object
  $scope.tasks = sync.$asArray();

  $scope.addTask = function() {
	$scope.tasks.$add({description:"add task here"})
   /*	var newTask = $scope.tasks.child("task");
	newTask.set({
		description: "My description"
	});
	*/
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
    
});
