app.controller('toDoCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.tasks = [
        { name : "Tester la To Do List",
          checked : true
        },
        { name : "Encore une fois pour le plaisir",
          checked : false
        }
    ];
    
    $scope.addTask = function (newTask) {
        if (newTask != null) {
            $scope.tasks.push(
                {
                    name : newTask,
                    checked : false
                }
            );
            $scope.newTask = "";
        }
        else {
            alert("Merci de saisir une tâche.");
        }
    };
    
    $scope.rmTask = function (task) {
        $scope.tasks.splice(task, 1);
    };
    
    $scope.$watch("tasks", function() {
        $scope.tasksLength = $scope.tasks.length;
    }, true);
}]);