app.directive('ngBlur', function() {
    return function(scope, elem, attrs) {
        elem.bind("blur", function(){
            scope.$apply(attrs.ngBlur);
        })
    }
});

app.controller('toDoCtrl', ['$scope', '$http', 'filterFilter', '$location', function ($scope, $http, filterFilter, $location) {
    $scope.tasks = [];
    $scope.todoName = "Chargement...";
    $scope.statusFilter = {};
    
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


    if ($location.path() == '') { $location.path("/"); }
    $scope.location = $location;
    $scope.$watch('location.path()', function(path) {
        $scope.statusFilter =
            (path == "/active") ? {checked : false} :
            (path == "/done") ? {checked : true} :
            (path == "/") ? { } :
            null;
    });
    
    $scope.checkAll = function (allchecked) {
        $scope.tasks.forEach(function(task) {
            task.checked = allchecked;
        });
    };

    $scope.editTask = function (task) {
        task.editing = false;
    };

    $scope.removeAll = function () {
        $scope.tasks = [];
    };
}]);