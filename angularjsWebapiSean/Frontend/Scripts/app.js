﻿
var app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: "html/login.html",
            controller: "loginCtrl"
        })
        .when('/projects', {
            templateUrl: "html/projects.html",
            controller: "projectsCtrl"
        })
        // removed other routes ... *snip
        .otherwise({
            redirectTo: '/home'
        }
        );

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);

}]);