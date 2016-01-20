
var app = (function(){
  function app(){};

  return app;
})();



(function($) {
  console.log("Versão do jQuery: "+ $().jquery);
  console.log("Versão do Angular: "+ angular.version.full);
  
}).call(this, jQuery);
