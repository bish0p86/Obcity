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

    if (localStorage.knownUser == undefined) {

      localStorage.setItem('knownUser', 'true');

      window.location.hash = '#/app/setup';

    } else {
      
      window.location.hash = '#/app/dashboard';
    }
  };
})

.controller('DashboardCtrl', function($scope, pedometer) {
  $scope.items = [];

  pedometer.initialize(function(){
    pedometer.start();

    pedometer.getLastweekSteps(8, function(data){
      $scope.items = data;
    });
    
  });
})

.controller('DashboardItemCtrl', function($scope, $stateParams) {
});
