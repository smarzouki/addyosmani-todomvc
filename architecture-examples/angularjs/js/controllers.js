/* App Controllers */

var todomvc = angular.module('todomvc', []);

todomvc.controller('TodoController',['$scope',function ($scope) {

  $scope.todos = retrieveStore();

  // Call updateStore() whenever the todos array changes.
  $scope.$watch('todos', updateStore, true);

  $scope.todoForms = {
    0: "You're done!",
    one: '{} item left',
    other: '{} items left'
  };

  function retrieveStore() {
    var store = localStorage.getItem('todo-angularjs');
    return (store && JSON.parse(store)) || [];
  };

  function updateStore() {
    var isEditing = $scope.todos.filter(function(val) {
      return val.editing;
    }).length;

    if (!isEditing) {
      localStorage.setItem('todo-angularjs', JSON.stringify($scope.todos));
    }
  };

  $scope.addTodo = function() {
    if (this.newTodo.trim().length === 0) {
      return;
    }

    $scope.todos.push({
      title: this.newTodo,
      done: false,
      editing: false
    });

    this.newTodo = '';
  };

  $scope.editTodo = function(todo) {
     //cancel any active editing operation
    $scope.todos.forEach(function(val) {
      val.editing = false;
    });
    todo.editing = true;
  };

  $scope.finishEditing = function(todo) {
    if (todo.title.trim().length === 0) {
      $scope.removeTodo(todo);
    } else {
      todo.editing = false;
    }
  };

  $scope.removeTodo = function(todo) {
    for (var i = 0, len = $scope.todos.length; i < len; ++i) {
      if (todo === $scope.todos[i]) {
        $scope.todos.splice(i, 1);
      }
    }
  };

  $scope.remainingTodos = function() {
    return $scope.todos.filter(function(val) {
      return !val.done;
    });
  };

  $scope.doneTodos = function() {
    return $scope.todos.filter(function(val) {
      return val.done;
    });
  }

  $scope.clearDoneTodos = function() {
    $scope.todos = $scope.remainingTodos();
  };

  $scope.markAllDone = function() {
    var markDone = true;
    if (!$scope.remainingTodos().length) {
      markDone = false;
    }
    $scope.todos.forEach(function(todo) {
      todo.done = markDone;
    });
  };
}]);
