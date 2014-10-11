angular.module('starter.controllers', [
  'starter.services'
])

.controller('AppCtrl', function($scope) {
  // Form data for the login modal
  $scope.loginData = {};


  $scope.isLogin = function(){
    return Object.keys($scope.loginData).length > 0;
  };

  // Perform the login action when the user submits the login form
  $scope.login = function() {
    window.location.hash = '#/app/dashboard';
  };
})

.controller('DashboardCtrl', function($scope, pedometer) {
  $scope.items = [];

  pedometer.initialize(function(){
    pedometer.start();

    pedometer.getLastweekSteps(10, function(data){
      console.log(data);
      $scope.items = data;
    });
  });
})

.controller('DashboardItemCtrl', function($scope, $stateParams) {
});
