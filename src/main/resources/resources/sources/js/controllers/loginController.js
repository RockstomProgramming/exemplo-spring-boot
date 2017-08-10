appController.controller('LoginCtrl', function($scope, LoginService) {
	$scope.login = function() {
		LoginService.login({
			username : $scope.username,
			password : $scope.password
		});
	}

	$scope.logout = function() {
		LoginService.logout();
	}

});
