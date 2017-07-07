

app.controller('projectsCtrl', function ($scope, $window, $location, ProjectsService) {
    $scope.title = 'Projects come here';

    $scope.projects = {};
    $scope.editPk = -1;
    $scope.selectedPk = -1;
    $scope.addingProject = false;

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
        ProjectsService.deleteProject(selectedPk, token).then(function (res) {
            console.log(res);
            $scope.projects = res;
        });
    }

    $scope.toggleNew = function () {
        $scope.addingProject = !$scope.addingProject;
    }

    //$scope.editToggle = function (selected) {

    //    console.log("call editToggle ", selected);
    //    //Actually need a save(maybe)
    //    if ($scope.editPk == selected) {
    //        $scope.editPk = -1;
    //    }
    //    else {
    //        $scope.editPk = selected;
    //    }
    //}
    $scope.selectToggle = function (selected) {

       $scope.selectedPk = selected;
          
    }
    

});

