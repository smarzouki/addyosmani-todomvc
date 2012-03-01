/* App Controllers */

App.Controllers.TodoController = function () {
    var self = this;

    self.newTodo = "";

    var retrieveStore = function() {
        var store = localStorage.getItem('todo-angularjs');
        return ( store && JSON.parse( store ) ) || [];
    };

    var updateStore = function() {
        var isEditing = angular.Array.count(self.todos, function(x) {
            return x.editing;
        });
        if (!isEditing){
            localStorage.setItem('todo-angularjs', JSON.stringify(self.todos));
        }
    };

    //not sure if its intended to do so. However, we need a hook to update the store
    //whenever angular changes any properties
    self.$watch(updateStore);

    self.todos = retrieveStore();

    self.addTodo = function() {
        if (self.newTodo.trim().length === 0) return;

        self.todos.push({
            title: self.newTodo,
            done: false,
            editing: false
        });
        self.newTodo = "";
    };

    self.editTodo = function(todo) {
        //cancel any active editing operation
        angular.forEach(self.todos, function(value) {
            value.editing = false;
        });
        todo.editing = true;
    };

    self.finishEditing = function(todo) {
        if (todo.title.trim().length === 0){
            self.removeTodo(todo);
        }
        else{
            todo.editing = false;
        }
    };

    self.removeTodo = function(todo) {
        angular.Array.remove(self.todos, todo);
    };

    var countTodos = function(done) {
        return function() {
            return angular.Array.count(self.todos, function(x) {
                return x.done === (done === "done");
            });
        }
    };

    var pluralize = function( count, word ) {
        return count === 1 ? word : word + 's';
    };

    self.remainingTodos = countTodos("undone");

    self.finishedTodos = countTodos("done");

    self.itemsLeftText = function(){
        return pluralize(self.remainingTodos(), 'item') + ' left'
    };

    self.clearItemsText = function(){
        var finishedTodos = self.finishedTodos();
        return 'Clear ' + finishedTodos + ' completed ' + pluralize(finishedTodos, 'item');
    };

    self.clearCompletedItems = function() {
        var oldTodos = self.todos;
        self.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) self.todos.push(todo);
        });
        self.allChecked = false;
    };

    self.toggleAllStates = function(){
        angular.forEach(self.todos, function(todo){
            todo.done = self.allChecked;
        })
    };

    self.hasFinishedTodos = function() {
        return self.finishedTodos() > 0;
    };

    self.hasTodos = function() {
        return self.todos.length > 0;
    };
};
