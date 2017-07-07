app.factory('LoginService', function ($http, $q) {
    loginFunctions = {};
 
    loginFunctions.login = function (user) {
        return $q(function (resolve, reject) {

            //Get the token
            $http.post('/api/login?username=' + user.username + '&password=' + user.password).then(function (res) {
                console.log(res);
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