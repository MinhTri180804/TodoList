import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoStatus } from '../../enums/todo-status';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todoListData: Todo[] = [
    {
      id: '1',
      name: 'learning english',
      status: TodoStatus.PENDING,
    },
    {
      id: '2',
      name: 'learning english',
      status: TodoStatus.PENDING,
    },
    {
      id: '3',
      name: 'learning english',
      status: TodoStatus.PENDING,
    },
    {
      id: '4',
      name: 'learning english',
      status: TodoStatus.PENDING,
    },
    {
      id: '5',
      name: 'learning english',
      status: TodoStatus.PENDING,
    },
  ];
}
