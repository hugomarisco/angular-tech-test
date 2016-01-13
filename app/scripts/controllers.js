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
