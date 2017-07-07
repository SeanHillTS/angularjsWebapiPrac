﻿//States:
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
    $scope.newProject = {
        title: 'title',
        description: 'description',
        start_date: new Date(),
        end_date: new Date(),
        is_billable: false,
        is_active: false
    };

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
        if ($scope.state == 0) {
            $scope.state = 2;
        }
        else if ($scope.state == 2) {
            $scope.state = 0;
        }
    }

    $scope.deleteProject = function () {
        console.log("delete called");
        ProjectsService.deleteProject($scope.selectedPk, token).then(function (res) {
            console.log(res);
            //if true remove the project with selectedPk as pk
            if (res == true) {
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
        if ($scope.state == 0) {
            $scope.state = 3;
        }
        else if ($scope.state == 3) {
            $scope.state = 0;
        }
    }

    $scope.createProject = function () {


        ProjectsService.createProject($scope.newProject).then(function (res) {
            $scope.projects.push(res);
            $scope.newProject = {
                title: 'title',
                description: 'description',
                start_date: new Date(),
                end_date: new Date(),
                is_billable: false,
                is_active: false
            };
            $scope.state = 0;

        },
            function (err) {
                console.log(err);
            }
        );
    }

    $scope.editToggle = function () {

        console.log("call editToggle ");
        //Actually need a save(maybe)
        if ($scope.editPk == $scope.selectedPk) {
            $scope.state = 0;
            $scope.editPk = -1;

        }
        else {
            //got one to edit
            $scope.editPk = $scope.selectedPk;
            var editingProject = getProjectByPk($scope.editPk);
            //In case of failure, you still have the old data
            $scope.editingProject = {
                pk: editingProject.pk,
                title: editingProject.title,
                description: editingProject.description,
                start_date: new Date(editingProject.start_date),
                end_date: new Date(editingProject.end_date),
                is_billable: editingProject.is_billable,
                is_active: editingProject.is_active
            };
            $scope.state = 1;
            
        }
    }

    $scope.saveEdit = function () {


        ProjectsService.updateProject($scope.editingProject).then(function (res) {
            console.log(res);
            if (res == true) {
                //edit model
                for (var i = 0; i < $scope.projects.length; i++) {
                    if ($scope.projects[i].pk == $scope.editPk) {
                        $scope.projects[i] = $scope.editingProject;
                    }
                }
                $scope.editPk = -1;
            }
            $scope.state = 0;

        },
            function (err) {
                console.log(err);
            }
        );
    }

    $scope.selectToggle = function (selected) {
        if ($scope.editPk == -1)
            $scope.selectedPk = selected;

    }


    function getProjectByPk(pk) {
        console.log(pk);

        for (var i = 0; i < $scope.projects.length; i++) {
            if ($scope.projects[i].pk == pk) {
                return $scope.projects[i];
            }
        }
    }

});

