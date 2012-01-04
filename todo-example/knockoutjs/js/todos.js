(function() {
    //a custom binding to handle the enter key (could go in a separate library)
    ko.bindingHandlers.enterKey = {
        init: function(element, valueAccessor, allBindingsAccessor, data) {
            var wrappedHandler, newValueAccessor;

            //wrap the handler with a check for the enter key
            wrappedHandler = function(data, event) {
                if (event.keyCode === 13) {
                    valueAccessor().call(this, data, event);
                }
            };

            //create a valueAccessor with the options that we would want to pass to the event binding
            newValueAccessor = function() {
                return { keyup: wrappedHandler };
            };

            //call the real event binding's init function
            ko.bindingHandlers.event.init(element, newValueAccessor, allBindingsAccessor, data);
        }
    };


    //represent a single todo item
    var Todo = function (content, done) {
        this.content = ko.observable(content);
        this.done = ko.observable(done);
        this.editing = ko.observable(false);
    };

    //can place methods on prototype, as there can be many todos
    ko.utils.extend(Todo.prototype, {
        edit: function() {  this.editing(true); },
        stopEditing: function() { this.editing(false); }
    });


    //our main view model
    var ViewModel = function(todos) {
        var self = this;
        //map array of passed in todos to an observableArray of Todo objects
        this.todos = ko.observableArray(ko.utils.arrayMap(todos, function(todo) {
            return new Todo(todo.content, todo.done);
        }));

        //store the new todo value being entered
        this.current = ko.observable();

        //add a new todo, when enter key is pressed
        this.add = function (data, event) {
            var newTodo = new Todo(self.current());
            self.todos.push(newTodo);
            self.current("");
        };

        //remove a single todo
        this.remove = function (todo) {
            self.todos.remove(todo);
        };

        //remove all completed todos
        this.removeCompleted = function () {
            self.todos.remove(function(todo) {
                return todo.done();
            });
        };

        //count of all completed todos
        this.completedCount = ko.computed(function () {
            return ko.utils.arrayFilter(self.todos(), function(todo) {
                return todo.done();
            }).length;
        });

        //count of todos that are not complete
        this.remainingCount = ko.computed(function () {
            return self.todos().length - self.completedCount();
        });

        //helper function to keep expressions out of markup
        this.getLabel = function(count) {
            return ko.utils.unwrapObservable(count) === 1 ? "item" : "items";
        };

        //computed observable that fires whenever anything changes in our todos
        this.isDirty = ko.computed(function() {
            //get a clean copy of the todos, which also creates a dependency on the observableArray and all observables in each item
            var todos = ko.toJS(self.todos);

            //store to local storage
            amplify.store("todos-knockout", todos);
        }).extend({ throttle: 1000 }); //save at most once per second
    };

    //check local storage for todos
    var todos = amplify.store("todos-knockout");

    //bind a new instance of our view model to the page
    ko.applyBindings(new ViewModel(todos || []));
})();
