var app=angular.module("MyApp",["ngRoute"]);app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){$routeProvider.when("/",{templateUrl:"html/login.html",controller:"loginCtrl"}).when("/projects",{templateUrl:"html/projects.html",controller:"projectsCtrl"}).otherwise({redirectTo:"/home"}),$locationProvider.html5Mode(!0)}]),app.controller("loginCtrl",function($scope){$scope.title="Login werk nie"}),app.controller("projectsCtrl",function($scope){$scope.title="Projects come here"});