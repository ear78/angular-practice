// Code goes here

angular.module('app', ["ngRoute"])

.config(function($routeProvider) {
  $routeProvider
    .when("/main", {
      templateUrl: "main.html",
      controller: "mainCtrl"
    })
    .when("/user/:username", {
      templateUrl: "user.html",
      controller: "userCtrl"
    })
    .otherwise({
      redirectTo: "/main"
    });
});