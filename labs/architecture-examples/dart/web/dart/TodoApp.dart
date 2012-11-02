part of todomvc;

class TodoApp {
  List<TodoWidget> todoWidgets = new List<TodoWidget>();
  
  Element todoListElement = query('#todo-list');
  Element mainElement = query('#main');
  InputElement checkAllCheckboxElement = query('#toggle-all');
  Element footerElement = query('#footer'); 
  Element countElement = query('#todo-count');
  Element clearCompletedElement = query('#clear-completed');
  Element showAllElement = query('#filters a[href="#/"]');
  Element showActiveElement = query('#filters a[href="#/active"]');
  Element showCompletedElement = query('#filters a[href="#/completed"]');
  
  TodoApp() {
    initLocalStorage();
    initElementEventListeners();
    
    window.on.hashChange.add((e) => updateFilter());
    
    updateFooterDisplay();
  }
  
  void initLocalStorage() {
    var jsonList = window.localStorage["todos-vanilladart"];
    if (jsonList != null) {
      try {
        var todos = JSON.parse(jsonList);
        for (Map todo in todos) {
          addTodo(new Todo.fromJson(todo));
        }
      } catch (e) {
        window.console.log("Could not load todos form local storage.");
      }
    }
  }
  
  void initElementEventListeners() {
    InputElement newTodoElement = query('#new-todo');

    newTodoElement.on.keyPress.add((KeyboardEvent e) {
      if (e.keyIdentifier == KeyName.ENTER) {
        var title = newTodoElement.value.trim();
        if (title != '') {
          addTodo(new Todo(UUID.createUuid(), title));
          newTodoElement.value = '';
          updateFooterDisplay();
          save();
        }
      }
    });
    
    checkAllCheckboxElement.on.click.add((Event e) {
      InputElement target = e.srcElement;
      for (TodoWidget todoWidget in todoWidgets) {
        if (todoWidget.todo.completed != target.checked) {
          todoWidget.toggle();
        }
      }
      updateCounts();
      save();
    });

    clearCompletedElement.on.click.add((MouseEvent e) {
      var newList = new List<TodoWidget>();
      for (TodoWidget todoWidget in todoWidgets) {
        if (todoWidget.todo.completed) {
          todoWidget.element.remove();
        } else {
          newList.add(todoWidget);
        }
      }
      todoWidgets = newList;
      updateFooterDisplay();
      save();
    });
  }
  
  void addTodo(Todo todo) {
    var todoWidget = new TodoWidget(this, todo);
    todoWidgets.add(todoWidget);
    todoListElement.nodes.add(todoWidget.createElement());
  }

  void updateFooterDisplay() {
    if (todoWidgets.length == 0) {
      checkAllCheckboxElement.style.display = 'none';
      mainElement.style.display = 'none';
      footerElement.style.display = 'none';
    } else {
      checkAllCheckboxElement.style.display = 'block';
      mainElement.style.display = 'block';
      footerElement.style.display = 'block';
    }
    updateCounts();
  }

  void updateCounts() {
    var complete = 0;
    for (TodoWidget todoWidget in todoWidgets) {
      if (todoWidget.todo.completed) {
        complete++;
      }
    }
    checkAllCheckboxElement.checked = (complete == todoWidgets.length);
    var left = todoWidgets.length - complete;
    countElement.innerHTML = '<b>${left}</b> item${left != 1 ? 's' : ''} left';
    if (complete == 0) {
      clearCompletedElement.style.display = 'none';
    } else {
      clearCompletedElement.style.display = 'block';
      clearCompletedElement.text = 'Clear completed (${complete})';
    }
    updateFilter();
  }
  
  void removeTodo(TodoWidget todoWidget) {
    todoWidgets.removeAt(todoWidgets.indexOf(todoWidget));
  }
  
  void updateFilter() {
    switch(window.location.hash) {
      case '#/active':
        showActive();
        break;
      case '#/completed':
        showCompleted();
        break;
      default:
        showAll();
    }
  }
  
  void showAll() {
    setSelectedFilter(showAllElement);
    for (TodoWidget todoWidget in todoWidgets) {
      todoWidget.visible = true;
    }
  }
  
  void showActive() {
    setSelectedFilter(showActiveElement);    
    for (TodoWidget todoWidget in todoWidgets) {
      todoWidget.visible = !todoWidget.todo.completed;
    }
  }
  
  void showCompleted() {
    setSelectedFilter(showCompletedElement);
    for (TodoWidget todoWidget in todoWidgets) {
      todoWidget.visible = todoWidget.todo.completed;
    }
  }
  
  void setSelectedFilter(Element e) {
    showAllElement.classes.remove('selected');
    showActiveElement.classes.remove('selected');
    showCompletedElement.classes.remove('selected');
    e.classes.add('selected');
  }
  
  void save() {
    var todos = new List<Todo>();
    for (TodoWidget todoWidget in todoWidgets) {
      todos.add(todoWidget.todo);
    }
    window.localStorage["todos-vanilladart"] = JSON.stringify(todos);
  }
}
