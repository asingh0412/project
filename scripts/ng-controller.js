var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider

  .when('/',{
    templateUrl : 'pages/first.html',
    controller : 'FirstController'
  })

  .when('/blog',{
    templateUrl: 'pages/blog.html',
    controller: 'BlogController'
  })

  .when('/projects',{
    templateUrl: 'pages/projects.html',
    controller: 'ProjectsController'
  })

  .otherwise({redirectTo:'/pages/404error.html'});
});

myApp.controller('FirstController', function($scope){
  $scope.message = "Hello from First Controller";
});
myApp.controller('BlogController', function($scope){
  $scope.message = "Hello from Blog Controller";
});
myApp.controller('ProjectsController', function($scope){
  $scope.message = "Hello from Projects Controller";
});
