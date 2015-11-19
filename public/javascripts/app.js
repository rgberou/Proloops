$(document).ready(function() {
  var app = angular.module('proloops', []);

  app.controller('ProloopsController', function() {
    this.products = accounts;
  });


  var accounts = [{
      name: 'Genaro C. Legaspi',
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius nisl sed laoreet gravida. Duis elementum eleifend nibh, eu dictum ligula feugiat et. Proin luctus interdum commodo.",     
      image: "image/gem-02.gif",
  }];
        
      

})();
