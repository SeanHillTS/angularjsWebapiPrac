

app.controller('loginCtrl', function ($scope, LoginService) {
    $scope.user = {
        username : "",
        password : ""
    };

    $scope.login = function () {
        LoginService.login($scope.user);
    }
});

