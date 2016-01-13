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
