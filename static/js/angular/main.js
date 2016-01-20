(function(){
// angular.module('todo-py', []);

  angular.module("todo-py", ["ngRoute"])
    .config(function($routeProvider){
      $routeProvider.when('/todo', {
        templateUrl: "/static/partials/index.html",
        controller: "TodoController"
      })
    });

}).call(this);