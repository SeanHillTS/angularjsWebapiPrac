

app.controller('projectsCtrl', function ($scope, $window, $location, ProjectsService) {
    $scope.title = 'Projects come here';

    $scope.projects = {};

    
    var token = $window.sessionStorage.getItem("token");
    if (!token) {
        $location.url('/login');
    }
    ProjectsService.getProjects(token).then(function (res) {
        console.log(res);
        $scope.projects = res;
    }
        )

});

