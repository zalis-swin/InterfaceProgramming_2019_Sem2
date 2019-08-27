import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4-project';
  todolist: Todo[] = [
    new Todo("Add more todos", false),
    new Todo("Slap the keyboard", true),
    new Todo("Make brain work", false),
    new Todo("Buy pizza", true)
  ]

  removeTodo(todo: Todo){
    let index = this.todolist.indexOf(todo);
    this.todolist.splice(index, 1);
  }
}

