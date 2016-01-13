var app = angular.module('PlayApp', []);

app.directive('progressBar', function(){
  return {
    restrict: 'E',
    scope: {
      percentage: '=percentage'
    },
    templateUrl: 'directives/progress-bar.html'
  }
});

app.directive('daySeparator', function(){
  return {
    restrict: 'E',
    scope: {
      day: '=day'
    },
    templateUrl: 'directives/day-separator.html'
  }
});

app.directive('problem', function(){
  return {
    restrict: 'E',
    scope: {
      problem: '=problem'
    },
    templateUrl: 'directives/problem.html'
  }
});

app.filter('ucfirst', function() {
	return function(input, arg) {
		return input.replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase();
    });
	};
});

app.filter('abs', function() {
  return function(input) {
      return Math.abs(input);
  };
});

app.service('UserService', function($http){
  this.user = {};

  function getPath(path) {
    return $http.get('https://pure-falls-1534.herokuapp.com' + path);
  }

  this.fetch = function() {
    var _this = this;

    // Get profile
    getPath('/profile').then(function(res) {
      _this.user.info = res.data;
    });

    // Get feed
    getPath('/activityfeed').then(function(res) {
      _this.user.feed = res.data['feed'];
    });

    // Get skills
    getPath('/skills').then(function(res) {
      _this.user.skills = res.data['skills'];
    });

    // Get problems
    getPath('/assignedproblems').then(function(res) {
      _this.user.problems = res.data['problems'];
    });

    // Get kudos
    getPath('/kudos').then(function(res) {
      _this.user.kudos = res.data;
    });

    return this.user;
  };
});

app.controller('ProfileCtrl', function($scope, UserService){
  $scope.user = UserService.fetch();

  $scope.giveKudos = false;

  $scope.isNewDay = function(index) {
    currentTimestamp = $scope.user.feed[index];
    lastTimestamp = $scope.user.feed[index - 1];

    if (lastTimestamp == undefined) {
      return true;
    } else {
      return currentTimestamp/86400 - lastTimestamp/86400 > 86400;
    }
  };
});
