(function(){

  angular.module("todo-py").controller("TodoController", ['$scope', function($scope){
    $scope.mensagem = "funcionando.";   
    console.log($scope.mensagem);
  }]);

}).call(this);