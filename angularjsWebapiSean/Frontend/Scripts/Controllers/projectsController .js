//States:
//0: viewing
//1: editing
//2: deleting
//3: creating

app.controller('projectsCtrl', function ($scope, $window, $location, ProjectsService) {
    $scope.title = 'Projects come here';

    $scope.projects = {};
    $scope.editPk = -1;
    $scope.selectedPk = -1;

    $scope.state = 0;

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

    //Toggle the delete buttons
    $scope.deleteToggle = function () {
        if ($scope.state == 0)
        {
            $scope.state = 2;
        }
        else if ($scope.state == 2) {
            $scope.state = 0;
        }
    }

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
                //Reset to view state
                $scope.state = 0;
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
        if ($scope.editPk == -1)
       $scope.selectedPk = selected;
          
    }
    

});

