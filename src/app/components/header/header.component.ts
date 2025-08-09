import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [TitleCasePipe, DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [],
})
export class HeaderComponent {
  readonly welcomeMessage: string = 'Good Morning';
  readonly date = new Date();
}
