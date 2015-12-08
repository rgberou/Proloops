/**
 * Created by Rg on 12/2/2015.
 */

function AppCtrl($scope,$http){
    console.log("Hello");

    $http.get('/newsfeed/verify').success(function(response){
        $scope.result=response;
        console.log(response);


    });




}
