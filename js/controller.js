'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainController', ['$scope', '$location', '$http',
  function MainController($scope, $location, $http) {
    $scope.message = "Hello World!";
  }]);

helloWorldControllers.controller('ShowController', ['$scope', '$location', '$http',
  function ShowController($scope, $location, $http) {
    $scope.message = "Show The World";
  }]);
