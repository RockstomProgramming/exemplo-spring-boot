angular.module('demo', ['demo.controllers', 'demo.services', 'ngRoute'])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: '/templates/pages/home.html',
        controller: function(LoginService, $scope) {
          $scope.logout = function() {
            LoginService.logout();
          }
        }
      }).otherwise({
        redirectTo: '/login'
      });

      $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

      $httpProvider.interceptors.push('HttpInterceptor');
  });

var appService = angular.module('demo.services', ['ngCookies']);

var appController = angular.module('demo.controllers', []);
