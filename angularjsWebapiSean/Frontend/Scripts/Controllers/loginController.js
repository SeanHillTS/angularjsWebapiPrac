

app.controller('loginCtrl', function ($scope, $window, $location, LoginService) {
    $scope.user = {
        username : "",
        password : ""
    };

    $scope.login = function () {
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

