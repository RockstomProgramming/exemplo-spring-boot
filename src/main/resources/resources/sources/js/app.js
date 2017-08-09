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
