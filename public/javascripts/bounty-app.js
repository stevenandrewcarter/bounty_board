var app = angular.module('bounty-app', ['ngRoute', 'ngResource']).run(function ($http, $rootScope) {
  $rootScope.authenticated = false;
  $rootScope.current_user = '';

  $rootScope.signout = function () {
    $http.get('auth/signout');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
  };
});

app.config(function ($routeProvider) {
  $routeProvider
    //the timeline display
      .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
      })
    //the login display
      .when('/login', {
        templateUrl: 'login.html',
        controller: 'authController'
      })
    //the signup display
      .when('/register', {
        templateUrl: 'register.html',
        controller: 'authController'
      });
});

app.factory('bountyService', function ($resource) {
  return $resource('/api/bounties/:id');
});

app.controller('mainController', function ($scope, $rootScope, bountyService) {
  $scope.bounties = bountyService.query();
  $scope.newBounty = {created_by: '', text: '', created_at: ''};

  $scope.bounty = function () {
    $scope.newBounty.created_by = $rootScope.current_user;
    $scope.newBounty.created_at = Date.now();
    $scope.newBounty.tags = $scope.newBounty.tags.split(' ');
    bountyService.save($scope.newBounty, function () {
      $scope.bounties = bountyService.query();
      $scope.newBounty = {created_by: '', text: '', created_at: ''};
    });
  };
});

app.controller('authController', function ($scope, $http, $rootScope, $location) {
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function () {
    $http.post('/auth/login', $scope.user).success(function (data) {
      if (data.state == 'success') {
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else {
        $scope.error_message = data.message;
      }
    });
  };

  $scope.register = function () {
    $http.post('/auth/signup', $scope.user).success(function (data) {
      if (data.state == 'success') {
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else {
        $scope.error_message = data.message;
      }
    });
  };
});