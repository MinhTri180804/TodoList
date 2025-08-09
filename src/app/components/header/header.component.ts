import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Menu01Icon } from '@hugeicons/core-free-icons';
import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [TitleCasePipe, DatePipe, HugeiconsIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [],
})
export class HeaderComponent {
  readonly welcomeMessage: string = 'Good Morning';
  readonly date = new Date();
  Menu01Icon = Menu01Icon;
}
