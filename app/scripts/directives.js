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
