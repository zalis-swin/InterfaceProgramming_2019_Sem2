import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {


  @Input() item: Todo;
  @Output() removeItemEvent = new EventEmitter<string>();

  removeItem() {
    this.removeItemEvent.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
