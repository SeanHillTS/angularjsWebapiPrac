app.factory('ProjectsService', function ($http, $q) {
    projectsFunctions = {};
 
    projectsFunctions.getProjects = function (token) {
        return $q(function (resolve, reject) {
            $http.get('api/projects/get?token=' + token).then(function (res) {
                console.log(res);
                    resolve(res.data);
               
            },
                function (err) {
                    reject(err);
                }

            );
        });
    }

    return projectsFunctions;

});