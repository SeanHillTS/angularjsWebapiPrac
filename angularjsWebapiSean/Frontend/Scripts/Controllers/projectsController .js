

app.controller('projectsCtrl', function ($scope, $window, $location, ProjectsService) {
    $scope.title = 'Projects come here';

    $scope.projects = {};
    $scope.selectedPk = -1;
    
    var token = $window.sessionStorage.getItem("token");
    if (token == null) {
        $location.url('/login');
        return;
    }
    ProjectsService.getProjects(token).then(function (res) {
        console.log(res);
        $scope.projects = res;
    });

    $scope.editToggle = function (selected) {

        console.log("call editToggle ", selected);
        //Actually need a save(maybe)
        if ($scope.selectedPk == selected)
        {
            $scope.selectedPk = -1;
        }
        else {
            $scope.selectedPk = selected;
        }
    }

});

