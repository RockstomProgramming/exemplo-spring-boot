angular.module('demo', ['demo.controllers', 'demo.services', 'ngRoute'])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: '/templates/pages/home.html'
      }).otherwise({
        redirectTo: '/login'
      });

      $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  });

var appService = angular.module('demo.services', []);

var appController = angular.module('demo.controllers', []);

appController.controller('DemoCtrl', function($scope) {
	$scope.title = "You're welcome: ";
});
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

appService.service('DemoService', function() {

});
