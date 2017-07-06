app.factory('ProjectsService', function ($http, $q) {
    projectsFunctions = {};
 
    projectsFunctions.getProjects = function (token) {
        return $q(function (resolve, reject) {

            resolve(mockProjects);

            //$http.get('api/projects/get?token=' + token).then(function (res) {
            //    console.log(res);
            //        resolve(res.data);
               
            //},
            //    function (err) {
            //        reject(err);
            //    }

            //);
        });
    }

    return projectsFunctions;

});

var mockProjects = [
    {
        "pk": 308,
        "title": "tvvhvnh",
        "description": "fbh",
        "start_date": "2019-12-16",
        "end_date": null,
        "is_billable": true,
        "is_active": true,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 291,
        "title": "liberate holmes",
        "description": "save the poor...",
        "start_date": "2017-01-01",
        "end_date": "2017-12-31",
        "is_billable": false,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 310,
        "title": "Create Test",
        "description": "Testing create",
        "start_date": "2017-07-04",
        "end_date": "2017-07-04",
        "is_billable": false,
        "is_active": true,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 311,
        "title": "test",
        "description": "test",
        "start_date": "2017-11-24",
        "end_date": "2017-11-24",
        "is_billable": false,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 312,
        "title": "test",
        "description": "test",
        "start_date": "2017-11-24",
        "end_date": "2017-11-24",
        "is_billable": false,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 313,
        "title": "test",
        "description": "test",
        "start_date": "2017-11-24",
        "end_date": "2017-11-24",
        "is_billable": false,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 314,
        "title": "test",
        "description": "test",
        "start_date": "2017-11-24",
        "end_date": "2017-11-24",
        "is_billable": false,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 283,
        "title": "Test",
        "description": "Test",
        "start_date": "2017-02-03",
        "end_date": "2018-03-03",
        "is_billable": false,
        "is_active": false,
        "task_set": [
            {
                "id": 158,
                "title": "__test_3__",
                "due_date": "2017-06-03T00:00:00",
                "estimated_hours": "13.00",
                "project": 283,
                "project_data": {
                    "pk": 283,
                    "title": "Test",
                    "description": "Test",
                    "start_date": "2017-02-03",
                    "end_date": "2018-03-03",
                    "is_billable": false,
                    "is_active": false,
                    "task_set": null,
                    "resource_set": null
                }
            },
            {
                "id": 157,
                "title": "Test",
                "due_date": "2017-06-03T00:00:00",
                "estimated_hours": "12.00",
                "project": 283,
                "project_data": {
                    "pk": 283,
                    "title": "Test",
                    "description": "Test",
                    "start_date": "2017-02-03",
                    "end_date": "2018-03-03",
                    "is_billable": false,
                    "is_active": false,
                    "task_set": null,
                    "resource_set": null
                }
            },
            {
                "id": 156,
                "title": "__test_2__",
                "due_date": "2017-06-03T00:00:00",
                "estimated_hours": "12.00",
                "project": 283,
                "project_data": {
                    "pk": 283,
                    "title": "Test",
                    "description": "Test",
                    "start_date": "2017-02-03",
                    "end_date": "2018-03-03",
                    "is_billable": false,
                    "is_active": false,
                    "task_set": null,
                    "resource_set": null
                }
            }
        ],
        "resource_set": []
    },
    {
        "pk": 266,
        "title": "Dani's test",
        "description": "Danis description",
        "start_date": "2017-05-26",
        "end_date": "2017-05-31",
        "is_billable": true,
        "is_active": true,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 268,
        "title": "The Test",
        "description": "newProject",
        "start_date": "2017-05-21",
        "end_date": "2017-05-26",
        "is_billable": true,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 279,
        "title": "reuters-news-story",
        "description": "__test",
        "start_date": "2017-02-03",
        "end_date": "2018-03-02",
        "is_billable": false,
        "is_active": false,
        "task_set": [
            {
                "id": 151,
                "title": "__test",
                "due_date": "2017-06-03T00:00:00",
                "estimated_hours": "12.00",
                "project": 279,
                "project_data": {
                    "pk": 279,
                    "title": "reuters-news-story",
                    "description": "__test",
                    "start_date": "2017-02-03",
                    "end_date": "2018-03-02",
                    "is_billable": false,
                    "is_active": false,
                    "task_set": null,
                    "resource_set": null
                }
            }
        ],
        "resource_set": []
    },
    {
        "pk": 286,
        "title": "coordinating special forces..and feeding the poor",
        "description": "war project",
        "start_date": "2017-06-01",
        "end_date": "2017-06-01",
        "is_billable": false,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 247,
        "title": "sdfhg",
        "description": "gjhgsdjfjsgdf",
        "start_date": "2018-02-02",
        "end_date": "2017-02-02",
        "is_billable": false,
        "is_active": true,
        "task_set": [
            {
                "id": 144,
                "title": "sdfsdf",
                "due_date": "2017-05-04T00:00:00",
                "estimated_hours": "50.00",
                "project": 247,
                "project_data": {
                    "pk": 247,
                    "title": "sdfhg",
                    "description": "gjhgsdjfjsgdf",
                    "start_date": "2018-02-02",
                    "end_date": "2017-02-02",
                    "is_billable": false,
                    "is_active": true,
                    "task_set": null,
                    "resource_set": null
                }
            },
            {
                "id": 148,
                "title": "new task",
                "due_date": "2017-02-03T00:00:00",
                "estimated_hours": "100.00",
                "project": 247,
                "project_data": {
                    "pk": 247,
                    "title": "sdfhg",
                    "description": "gjhgsdjfjsgdf",
                    "start_date": "2018-02-02",
                    "end_date": "2017-02-02",
                    "is_billable": false,
                    "is_active": true,
                    "task_set": null,
                    "resource_set": null
                }
            }
        ],
        "resource_set": []
    },
    {
        "pk": 252,
        "title": "sdfdf",
        "description": "fhsdf",
        "start_date": "2017-05-04",
        "end_date": "2017-05-04",
        "is_billable": false,
        "is_active": true,
        "task_set": [
            {
                "id": 149,
                "title": "dfsdhf",
                "due_date": "2017-03-03T00:00:00",
                "estimated_hours": "147.00",
                "project": 252,
                "project_data": {
                    "pk": 252,
                    "title": "sdfdf",
                    "description": "fhsdf",
                    "start_date": "2017-05-04",
                    "end_date": "2017-05-04",
                    "is_billable": false,
                    "is_active": true,
                    "task_set": null,
                    "resource_set": null
                }
            }
        ],
        "resource_set": []
    },
    {
        "pk": 296,
        "title": "Tangent Test",
        "description": "we do things",
        "start_date": "2017-06-27",
        "end_date": null,
        "is_billable": true,
        "is_active": true,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 297,
        "title": "Tangent Test",
        "description": "we do things",
        "start_date": "2017-06-27",
        "end_date": null,
        "is_billable": true,
        "is_active": false,
        "task_set": [],
        "resource_set": []
    },
    {
        "pk": 284,
        "title": "oh boy...............",
        "description": "my hat",
        "start_date": "2017-05-04",
        "end_date": "2017-05-04",
        "is_billable": false,
        "is_active": true,
        "task_set": [
            {
                "id": 159,
                "title": "Munava_Matthew_Created This 2017-07-05",
                "due_date": "2017-11-11T00:00:00",
                "estimated_hours": "198.00",
                "project": 284,
                "project_data": {
                    "pk": 284,
                    "title": "oh boy...............",
                    "description": "my hat",
                    "start_date": "2017-05-04",
                    "end_date": "2017-05-04",
                    "is_billable": false,
                    "is_active": true,
                    "task_set": null,
                    "resource_set": null
                }
            }
        ],
        "resource_set": []
    }
];