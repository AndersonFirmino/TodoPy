(function(){
// angular.module('todo-py', []);

  angular.module("todo-py", ["ngRoute"])
    .config(function($routeProvider){
      $routeProvider.when('/', {
        templateUrl: "/static/partials/index.html",
        controller: "TodoController"
      })
    });

}).call(this);