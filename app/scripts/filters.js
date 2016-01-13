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
