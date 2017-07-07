

app.controller('projectsCtrl', function ($scope, $window, $location, ProjectsService) {
    $scope.title = 'Projects come here';

    $scope.projects = {};
    $scope.editPk = -1;
    $scope.selectedPk = -1;
    $scope.addingProject = false;
    $scope.editingProject = false;

    var token = $window.sessionStorage.getItem("token");
    if (token == null) {
        $location.url('/login');
        return;
    }
    ProjectsService.getProjects(token).then(function (res) {
        console.log(res);
        $scope.projects = res;
    });


    $scope.deleteProject = function(){
        console.log("delete called");
        ProjectsService.deleteProject($scope.selectedPk, token).then(function (res) {
            console.log(res);
            //if true remove the project with selectedPk as pk
            if(res == true){
                $scope.projects = $scope.projects.filter(function (obj) {
                return obj.pk !== $scope.selectedPk;
                });
            $scope.selectedPk = -1;
            }
        });
    }

    $scope.toggleNew = function () {
        $scope.addingProject = !$scope.addingProject;
    }

    $scope.editToggle = function () {

        console.log("call editToggle ");
        //Actually need a save(maybe)
        if ($scope.editPk == $scope.selectedPk) {
            $scope.editPk = -1;
        }
        else {
            $scope.editPk = $scope.selectedPk;
        }
    }

    $scope.saveEdit = function () {

    }

    $scope.selectToggle = function (selected) {

       $scope.selectedPk = selected;
          
    }
    

});

