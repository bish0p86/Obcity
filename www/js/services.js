angular.module('starter.services', []).

service('pedometer', [function() {
  if (typeof window.M7StepCounter === 'undefined') {
    function M7StepCounter(){};

    M7StepCounter.prototype.isAvailable = function(onSuccess) {
      onSuccess();
    };

    M7StepCounter.prototype.start = function() {};

    M7StepCounter.prototype.getSteps = function(steps, onSuccess) {
      onSuccess(Math.round(Math.random() * 10000));
    };
  }



  var stepCounter;

  function getDate(dayBefore) {
      var date = new Date();

      date.setDate(date.getDate() - dayBefore);
      
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      
      if (dd < 10) {
        dd = '0'+dd;
      }

      if (mm < 10) {
        mm = '0'+mm;
      }

      return date;
  };

  function getWeekday(date) {
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    return days[date.getDay()];
  };


  function getMonth(date) {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return months[date.getMonth()];
  };


  function getDay(date) {
    return date.getDate();
  };


  function addDay(weeklySteps, steps, day) {
    var date = getDate(day);

    weeklySteps.push({
      weekday: getWeekday(date),
      day: getDay(date),
      month: getMonth(date),
      steps: steps
    })
  };
 
  return {

      initialize: function(onSuccess, onError) {       
          stepCounter = new M7StepCounter();
          stepCounter.isAvailable(onSuccess, onError);
      },

      isAvailable: function(onSuccess, onError) {
          stepCounter.isAvailable(onSuccess, onError);
      },

      start: function(onSuccess, onError) {
          stepCounter.start(onSuccess, onError);
      },

      stop: function(onSuccess, onError) {
          stepCounter.stop(onSuccess, onError);
      },

      getSteps: function(onSuccess, onError) {
          stepCounter.getSteps(0, onSuccess, onError);
      },

      getLastweekSteps: function(onSuccess, onError) {
          var weeklySteps = [];
          
          
          var getDayOne = function(steps) {
              addDay(weeklySteps, steps, 1);

              stepCounter.getSteps(2, getDayTwo, onError);
          };
          var getDayTwo = function(steps) {
              addDay(weeklySteps, steps, 2);

              stepCounter.getSteps(3, getDayThree, onError);
          };
          var getDayThree = function(steps) {
              addDay(weeklySteps, steps, 3);

              stepCounter.getSteps(4, getDayFour, onError);
          };
          var getDayFour = function(steps) {
              addDay(weeklySteps, steps, 4);

              stepCounter.getSteps(5, getDayFive, onError);
          };
          var getDayFive = function(steps) {
              addDay(weeklySteps, steps, 5);

              stepCounter.getSteps(6, getDaySix, onError);
          };
          var getDaySix = function(steps) {
              addDay(weeklySteps, steps, 6);

              onSuccess(weeklySteps);
          };

          stepCounter.getSteps(1, getDayOne, onError);
      }
  };

}]);