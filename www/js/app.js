// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngResource', 'starter.services'])

.run(function($ionicPlatform, Session) {


  // Check if a user is logged in, if not, redirect them.
  var session = Session.query().$promise.then(function(d){
    // user is logged in.
  }, function(){
    window.location.hash = '#/app/login';
  });


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings.html"
        }
      }
    })

    .state('app.setup1', {
      url: "/setup1",
      views: {
        'menuContent' :{
          templateUrl: "templates/setup1.html"
        }
      }
    })

    .state('app.setup2', {
      url: "/setup2",
      views: {
        'menuContent' :{
          templateUrl: "templates/setup2.html",
          controller: 'Setup2Ctrl'
        }
      }
    })

    .state('app.setup3', {
      url: "/setup3",
      views: {
        'menuContent' :{
          templateUrl: "templates/setup3.html",
          controller: 'Setup3Ctrl'
        }
      }
    })

    .state('app.setup-completion', {
      url: "/setup-completion",
      views: {
        'menuContent' :{
          templateUrl: "templates/setup-completion.html"
        }
      }
    })

    .state('app.welcome', {
      url: "/welcome",
      views: {
        'menuContent' :{
          templateUrl: "templates/welcome.html"
        }
      }
    })

    .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html"
        }
      }
    })


    .state('app.signup', {
      url: "/signup",
      views: {
        'menuContent' :{
          templateUrl: "templates/signup.html"
        }
      }
    })


    .state('app.logout', {
      url: "/logout",
      views: {
        'menuContent' :{
          templateUrl: "templates/logout.html"
        }
      }
    })

    .state('app.progress', {
      url: "/progress",
      views: {
        'menuContent' :{
          templateUrl: "templates/progress.html",
          controller: 'DashboardCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/dashboard/:itemId",
      views: {
        'menuContent' :{
          templateUrl: "templates/item.html",
          controller: 'DashboardCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});

