(function() {
    var app = angular.module('proLoop', []);

    app.controller('LoopController', function($scope,$http){
        console.log("success");

        $http.get('/login').success(function(response){
            console.log("got it");
            $scope.product=response;
        });

    });


})();