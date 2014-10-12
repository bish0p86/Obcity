angular.module('starter.controllers', [
  'starter.services'
])

.controller('AppCtrl', function($scope, Session, User) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.registerData = {};

  $scope.isLogin = function(){
    return Object.keys($scope.loginData).length > 0;
  };


  // Perform the login action when the user submits the login form
  $scope.login = function() {

    var username = $scope.loginData.username;
    var password = $scope.loginData.password;

    logInUser(username, password);

  };


  var logInUser = function(username, password){

    var userDetails = {
      username: username,
      password: password
    }

    $scope.session = new Session(userDetails);
    $scope.session.$save(function(response) {


    // on success
    if (localStorage.knownUser == undefined) {
      localStorage.setItem('knownUser', 'true');
      window.location.hash = '#/app/setup1';
    } else {
      window.location.hash = '#/app/progress';
    }

  }, function(){
    $scope.hasError = true;
    return false;
  });

  }


  /**
   * Log a user out
   */
  $scope.logOutUser = function(){

    console.log('loggin out');

    $scope.session.$delete(function(response) {
      console.log(response);
    });

  }


  /**
   * Sign up a user
   */
  $scope.signup = function() {

    var username = $scope.registerData.username;
    var password = $scope.registerData.password;

    var userDetails = {
      username: username,
      password: password
    }

    if (!username || !password) {
      $scope.hasSignupError = true;
      return false; // these fields are required
    }

    $scope.user = new User(userDetails);
    $scope.user.$save(function(response) {

      logInUser(username, password);

    }, function(err) {
      $scope.hasSignupError = true;
      console.log('error', err);
    });

  }

})

.controller('DashboardCtrl', function($scope, pedometer) {
  $scope.items = [];

  pedometer.initialize(function(){
    pedometer.start();

    pedometer.getLastweekSteps(8, function(data){
      $scope.items = data;
      $scope.predicate = '-day';
    });

  });
})





.controller('DashboardItemCtrl', function($scope, $stateParams) {


});
