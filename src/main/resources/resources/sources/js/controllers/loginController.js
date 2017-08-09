appController.controller('LoginCtrl', function($scope, $http, $location) {
	$scope.login = function() {
		var headers = {authorization : "Basic "
			 + btoa($scope.username + ":" + $scope.password)
	 	};
		$http.post('login', {headers: headers})
			.then(function(response) {
				$location.path('/home')
			}, function(e) {
				console.log(e);
			});
	}
});
