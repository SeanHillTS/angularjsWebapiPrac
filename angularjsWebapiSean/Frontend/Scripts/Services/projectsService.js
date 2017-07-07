app.factory('ProjectsService', function ($http, $q, $window) {
    projectsFunctions = {};

   //Get all projects
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
    //Delete single project
    projectsFunctions.deleteProject = function (current, token) {
        return $q(function (resolve, reject) {


            $http.post('api/projects/delete?pk=' + current + '&token=' + $window.sessionStorage.getItem("token")).then(function (res) {
                resolve(res.data);

            },
                function (err) {
                    reject(err);
                }

            );
        });
    }
    //Update single project
    projectsFunctions.updateProject = function (project, token) {
        return $q(function (resolve, reject) {

            var tempProject = {
                pk: project.pk,
                title: project.title,
                description: project.description,
                start_date: reformatDate(project.start_date),
                end_date: reformatDate(project.end_date),
                is_billable: project.is_billable,
                is_active: project.is_active
            };
            console.log(tempProject);
            $http.post('api/projects/update?token=' + $window.sessionStorage.getItem("token"), tempProject).then(function (res) {
                console.log(res);
                resolve(res.data);

            },
                function (err) {
                    reject(err);
                }

            );
        });
    }
    //Create single project
    projectsFunctions.createProject = function (project, token) {
            return $q(function (resolve, reject) {

                var tempProject = {
                    title: project.title,
                    description: project.description,
                    start_date: reformatDate(project.start_date),
                    end_date: reformatDate(project.end_date),
                    is_billable: project.is_billable,
                    is_active: project.is_active
                };
                console.log(tempProject);
                $http.post('api/projects/create?token=' + $window.sessionStorage.getItem("token"), tempProject).then(function (res) {
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

//helper
function reformatDate(date) {
    console.log(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
    
}

