import { Component, input } from '@angular/core';

@Component({
  selector: 'app-base-core-icon',
  imports: [],
  templateUrl: './base-core-icon.component.html',
  styleUrl: './base-core-icon.component.css',
})
export abstract class BaseCoreIconComponent {
  /**
   * Size of the icon in pixels
   * @default 24
   */
  size = input<string | number>(24);

  /**
   * Color of the icon
   * @default currentColor
   */
  color = input('currentColor');

  /**
   * Stroke width of the icon
   * @default 1.5
   */
  strokeWidth = input(1.5);

  /**
   * Additional CSS classes to apply to the icon
   */
  classname = input('');
}
