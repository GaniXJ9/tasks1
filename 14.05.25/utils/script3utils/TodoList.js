class ToDoList {
  constructor() {
    this.todolist = [];
  }

  addTodo(todo) {
    this.todolist.push(todo);
    this.renderToDoList();
  }

  renderToDoList() {
    return this.todolist;
  }
}

module.exports = ToDoList;
