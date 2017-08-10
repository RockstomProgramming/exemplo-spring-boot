appService.factory('HttpInterceptor', function($q, $location) {
	return {
		responseError : function(error) {
			if (error.status == 401) {
				$location.path('/login');
			}
		}
	}
});
