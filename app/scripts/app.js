var taskListApp = angular.module("TaskListApp", ['firebase', 'ui.router', 'ngRoute']);

taskListApp.controller('Homepage.controller', ['$scope', '$firebase', function($scope,$firebase) {
  var fireData = new Firebase("https://radiant-fire-5902.firebaseio.com/");
  var sync = $firebase(fireData);
  // download the data into a local object
  $scope.data = sync.$asObject();
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
