import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './header/nav/nav.component';

@Component({
  selector: 'ecf-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecffront';
}
