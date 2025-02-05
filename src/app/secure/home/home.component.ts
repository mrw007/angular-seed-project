import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
  /**
   * Name
   */
  name: string;
  /**
   * email
   */
  email: string;

  constructor() {
    this.name = 'Wahib Kerkeni';
    this.email = 'mr.wahib@gmail.com';
  }
}
