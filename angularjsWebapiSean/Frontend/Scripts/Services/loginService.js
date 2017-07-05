app.factory('LoginService', function ($http) {
    loginFunctions = {}
    loginFunctions.login = function (user) {
        alert(user);
        $http.post('/api/login?username=' + user.username + '&password=' + user.password).then(function(res){
            console.log(res);
        }

        );
    }
    return loginFunctions;

});