app.factory('LoginService', function ($http, $q) {
    loginFunctions = {};
 
    loginFunctions.login = function (user) {
        return $q(function (resolve, reject) {

            resolve("46d2ab1b9fdb092f803fc83e16bf001292d98fa5"); //mock

            //$http.post('/api/login?username=' + user.username + '&password=' + user.password).then(function (res) {
            //    console.log(res);
            //        resolve(res.data);
               
            //},
            //    function (err) {
            //        reject(err);
            //    }

            //);
        });
    }

    return loginFunctions;

});