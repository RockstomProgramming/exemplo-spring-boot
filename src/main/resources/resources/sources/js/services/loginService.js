appService.service('LoginService', ['$cookies', '$location', '$http', function($cookies, $location, $http) {
	return {
		login: function(user) {
			var headers = {
				authorization : "Basic "
						+ btoa(user.username + ":" + user.password)
			};

			$http.get('login', {
				headers : headers
			}).then(function(response) {
				/*$cookies.put('login', {
					authenticated : response.data.authenticated,
					user : response.data.name
				});*/

				$location.path('/home');

			}, function(e) {
				console.log(e);
			});
		},

		logout: function() {
			$http.post('logout').then(function() {
				$location.path('/login');
			}, function(e) {
				console.log(e);
			});
		}
	}
}]);
