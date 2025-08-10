import { NgComponentOutlet } from '@angular/common';
import { Component, HostListener, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  disabled: InputSignal<boolean> = input(false);
  id: InputSignal<string | undefined> = input();
  name: InputSignal<string | undefined> = input();
  required: InputSignal<boolean> = input(false);
  value: InputSignal<unknown> = input();
  checked: InputSignal<boolean> = input(false);
}
