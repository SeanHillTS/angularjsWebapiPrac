//Projects page controller
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
    $scope.selected = {};

    $scope.state = 0;
    //Dummy project
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
    //Get Projects on load
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
    //Toggle new buttons confirm/cancel
    $scope.toggleNew = function () {
        if ($scope.state == 0) {
            $scope.state = 3;
        }
        else if ($scope.state == 3) {
            $scope.state = 0;
        }
    }
    //Call create project service
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
    //Toggle edit buttons confirm/cancel
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
    //Save the edited project through service
    $scope.saveEdit = function () {


        ProjectsService.updateProject($scope.editingProject).then(function (res) {
            console.log(res);
            if (res == true) {
                //edit model
                for (var i = 0; i < $scope.projects.length; i++) {
                    if ($scope.projects[i].pk == $scope.editPk) {
                        
                        $scope.projects[i].pk = $scope.editingProject.pk;
                        $scope.projects[i].title = $scope.editingProject.title;
                        $scope.projects[i].description = $scope.editingProject.description;
                        $scope.projects[i].start_date = reformatDate($scope.editingProject.start_date);
                        $scope.projects[i].end_date = reformatDate($scope.editingProject.end_date);
                        $scope.projects[i].is_billable = $scope.editingProject.is_billable;
                        $scope.projects[i].is_active = $scope.editingProject.is_active;
                          
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
    //Select a row
    $scope.selectToggle = function (selected) {
        if ($scope.editPk == -1){
            $scope.selectedPk = selected;
            $scope.selected = getProjectByPk(selected);
            console.log($scope.selected);
        }

    }

    //Helper
    function getProjectByPk(pk) {
        console.log(pk);

        for (var i = 0; i < $scope.projects.length; i++) {
            if ($scope.projects[i].pk == pk) {
                return $scope.projects[i];
            }
        }
    }

});

