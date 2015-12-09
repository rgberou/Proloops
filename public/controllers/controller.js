/**
 * Created by Rg on 12/2/2015.
 */

(function() {
    var app = angular.module('proLoop', []);

    app.controller('loginController', function($scope,$http){
        $http.get('/users').success(function(response){
            $scope.users=response;
        })
        $scope.addUser=function(){
            console.log($scope.User);
            $http.post('/users',$scope.User).success(function(response){
                console.log(response);
                $scope.message="Succesful";
            })
        }

    });



})();