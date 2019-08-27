import { Component } from '@angular/core';
import { TodoItem } from './todo';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todolist: TodoItem[] = [];

  addTodo(name: string) {
    this.todolist.push(new TodoItem(name));
  }

  removeTodo(item: TodoItem) {
    let index = this.todolist.indexOf(item);
    this.todolist.splice(index, 1);
  }

  setTodoComplete(checked: boolean, item: TodoItem) {
    item.completed = checked;
    item.dateCompleted = new Date;
  }
}
