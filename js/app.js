'use strict';


/* App module */
var helloWorldApp = angular.module('helloWorldApp', [
  'ngRoute',
  'helloWorldControllers'
]);

helloWorldApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
      })
      .when('/show', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      });

      $locationProvider.html5Mode(false).hashPrefix('!');
  }
]);
