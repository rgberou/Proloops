/**
 * Created by Rg on 12/2/2015.
 */
(function() {
    var app = angular.module('proLoop', []);
    app.controller('loginController', function($scope,$http){

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
        $scope.loginUser=function(){

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
                }
            });
        }
        var refresh=function(){
            $scope.User="";
            $scope.message="";
        }

    });
})();