/**
 * Created by Rg on 12/2/2015.
 */
(function() {
    var app = angular.module('proLoop', []);
    app.controller('registrationController', function($scope,$http){

        $http.get('/users').success(function(response){
            $scope.users=response;
        })
        $scope.refresh=function(){
            refresh()
        }
        $scope.addUser=function(){
            console.log($scope.User);
            if($scope.User.lastname==null&&$scope.User.firstname==null&&$scope.User.email==null&&$scope.User.password==null&&$scope.password==null){
                $scope.message="Values must not be empty";
            }else{
                if($scope.User.password==$scope.confirmpass){
                    checkEmailduplicate();
                }else{
                    $scope.message="Passwords did not match";
                }
            }

        }

        //functions for trapping-----------------------------------
        var checkEmailduplicate=function(){
            $scope.message="";
            var count=0;
            $http.get('/users').success(function(response){
                $scope.users=response;
                for(var i=0;i<$scope.users.length;i++){
                    if($scope.users[i].email==$scope.User.email){
                        count=count+1;
                    }
                }
                console.log(count);
                if(count>=1){
                    $scope.message="Email already in used";
                }else{
                    insertUser();
                }
            })
        };
        var insertUser=function(){
            $http.post('/signup',$scope.User).success(function(response){
                if(response==null){
                }else{
                    $scope.message="You are Successfully registered";
                    refresh();
                }
            });
        }
        var refresh=function(){
            $scope.User="";
            $scope.confirmpass="";
        }


    });
    //------Controller for login
    app.controller('loginController', function($scope,$http,$window){
        $scope.loginuser=function(){

            console.log($scope.User);
            /*$http.post('/users/getinfo',$scope.User).success(function(response){
                $scope.user=response;
                console.log("received");
                console.log($scope.user);

            });*/
            $http.post('/users/getinfo',$scope.User).success(function(response){
                $scope.user=response;
                console.log("received");
                console.log($scope.user);
                if($scope.user==null){
                    console.log("invalid");
                }else{
                    console.log("Entered");
                    $http.post('/newsfeed/redirect').then(function(data, status){
                        $window.location.href = data.redirect;
                    });
                }
            });


        }
    });
})();