app.factory('LoginService', function ($http, $q) {
    loginFunctions = {}
    loginFunctions.login = function (user) {
        return $q(function (resolve, reject) {
            $http.post('/api/login?username=' + user.username + '&password=' + user.password).then(function (res) {

                resolve(res.data);
            },
                function (err) {
                    reject(err);
                }

            );
        });
    }
    return loginFunctions;

});