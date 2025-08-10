import { Component, input } from '@angular/core';
import { TodoStatus } from '../../enums/todo-status';
import { Todo } from '../../models/todo';
import { ClockIconComponent } from '../icons/clock-icon/clock-icon.component';
import { EllipsisVerticalIconComponent } from '../icons/ellipsis-vertical-icon/ellipsis-vertical-icon.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    ClockIconComponent,
    EllipsisVerticalIconComponent,
    CheckboxComponent,
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  TodoStatus = TodoStatus;

  handleClick() {
    console.log('click checkbox ' + this.todo().id);
  }
}
