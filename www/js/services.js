angular.module('starter.services', []).

service('pedometer', [function() {
  if (window.M7StepCounter === undefined) {
    window.M7StepCounter = function(){};

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
      'Sun',
      'Mon',
      'Tues',
      'Wed',
      'Thurs',
      'Fri',
      'Sat'
    ];

    return days[date.getDay()];
  };


  function getMonth(date) {
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ];

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

      getLastweekSteps: function(max, onSuccess, onError) {
          var weeklySteps = [];

          function onDaySuccess(day, steps) {
            addDay(weeklySteps, steps, day);

            if (weeklySteps.length == max) {
              onSuccess(weeklySteps);
            }

          };

          for (var day = 1; day <= max; day++) {
              stepCounter.getSteps(day, (function(steps) {
                onDaySuccess(this, steps);
              }).bind(day));
          };
      }
  };

}])

.factory('User', function($resource) {
  return $resource('http://obcity.herokuapp.com/user/:id');
})

.factory('Session', ['$resource', function($resource) {

  return $resource('http://obcity.herokuapp.com/session/:id', {}, {
    query: { method:'GET', isArray: false, withCredentials: true },
    create: { method:'POST', withCredentials: true}
  });

}])

.factory('Charity', function($resource, api) {
  return $resource(api + '/charity/:id');
})

.factory('Challenge', function($resource, api) {
  return $resource(api + '/challenge/:id', {}, {
    query: { method:'GET', withCredentials: true },
    create: { method: 'POST', withCredentials: true }
  });
})

.factory('Activity', function($resource, api) {
  return $resource(api + '/activity/:id', {}, {
    query: { method:'GET', withCredentials: true },
    create: { method: 'POST', withCredentials: true }
  });
})

.factory('Transaction', function($resource, api) {
  return $resource(api + '/transaction/:id', {}, {
    query: { method: 'GET', withCredentials: true },
    authorize: {
      url: api + '/transaction/authorize',
      method: 'GET',
      withCredentials: true
    },
  });
});
