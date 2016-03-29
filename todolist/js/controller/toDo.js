app.controller('toDoCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.tasks = [
        { name : "Tester la To Do List",
          completed : false
        },
        { name : "Encore une fois pour le plaisir",
          completed : false
        }
    ];
    
    $scope.addTask = function (newTask) {
        if (newTask != null) {
            var obj = {};
            obj["name"] = newTask; 
            $scope.tasks.push(obj);
        }
        else {
            alert("Merci de saisir une tâche.");
        }
    };
    
    $scope.rmTask = function (task) {
        $scope.tasks.splice(task, 1);
    };
}]);