angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Form data for the login modal
  $scope.loginData = {};


  $scope.isLogin = function(){
    console.log($scope.loginData);
    return Object.keys($scope.loginData).length > 0;
  };

  // Perform the login action when the user submits the login form
  $scope.login = function() {
    window.location.hash = '#/app/dashboard';

  };
})

.controller('DashboardCtrl', function($scope) {
  $scope.items = [
    { 
      id:1,
      weekday: 'Mon',
      date: '13',
      month: 'Oct',
      steps: '2000',
      donation: '50p',
      success: true
    },
    { 
      id:1,
      weekday: 'Tues',
      date: '14',
      month: 'Oct',
      steps: '2100',
      donation: '£1',
      success: false
    },
    { 
      id:1,
      weekday: 'Wed',
      date: '15',
      month: 'Oct',
      steps: '2020',
      donation: '£1',
      success: true
    },
  ];
})

.controller('DashboardItemCtrl', function($scope, $stateParams) {
});
