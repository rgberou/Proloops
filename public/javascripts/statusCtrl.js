/**
 * Created by Rg on 12/2/2015.
 */
(function() {
    var app = angular.module('proLoop', []);


        //functions for trapping-----------------------------------

    //------Controller for status
    app.controller('statusCtrl', function($scope,$http,$window){
        $scope.postStatus=function(){
            console.log($scope.User);
            $http.post('/status',$scope.User).success(function(response){
                $scope.result=response;
                console.log($scope.result);
            });

        }
    });
})();/**
 * Created by Rg on 12/16/2015.
 */
