app.controller('toDoCtrl', ['$scope', '$http', 'filterFilter', function ($scope, $http, filterFilter) {
    $scope.tasks = [];
    $scope.todoName = "Chargement...";
    
    $http.get('tasks.php').success(function(data){
        $scope.tasks = data;
        $scope.todoName = "My To Do List";
    });
    
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
        $scope.tasksLength = filterFilter($scope.tasks, {checked:false}).length;
        $scope.allchecked = !$scope.tasksLength;
    }, true);
    
    $scope.checkAll = function (allchecked) {
        $scope.tasks.forEach(function(task) {
            task.checked = allchecked;
        });
    };
}]);