import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe } from '@angular/common';
import { BarsIconComponent } from '../icons/bars-icon/bars-icon.component';

@Component({
  selector: 'app-header',
  imports: [TitleCasePipe, DatePipe, BarsIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [],
})
export class HeaderComponent {
  readonly welcomeMessage: string = 'Good Morning';
  readonly date = new Date();
}
