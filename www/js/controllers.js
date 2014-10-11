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
  pedometer.initialize(function(){
    pedometer.start();

    dometer.getLastweekSteps(function(data){

    });
    
  });

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
      { 
      id:1,
      weekday: 'Thu',
      date: '13',
      month: 'Oct',
      steps: '2000',
      donation: '50p',
      success: true
    },
    { 
      id:1,
      weekday: 'Fri',
      date: '14',
      month: 'Oct',
      steps: '2100',
      donation: '£1',
      success: false
    },
    { 
      id:1,
      weekday: 'Sat',
      date: '15',
      month: 'Oct',
      steps: '2020',
      donation: '£1',
      success: true
    },
    { 
      id:1,
      weekday: 'Sun',
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
