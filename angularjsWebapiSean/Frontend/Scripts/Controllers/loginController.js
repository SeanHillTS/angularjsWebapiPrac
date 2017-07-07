

app.controller('loginCtrl', function ($scope, $window, $location, LoginService) {
    $scope.user = {
        username : "",
        password : ""
    };

    $scope.login = function () {
        //Call the service to get api token and save to session storage for future use
        LoginService.login($scope.user).then(function (res) {
            if (res) {
                $window.sessionStorage.setItem("token", res);
                $location.url('/projects');
            }
        },
            function (err) {
                console.log(err);
            }
        
            )
    }
});

