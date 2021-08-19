import { Component, Input, OnInit } from '@angular/core';
import { SidenavServiceService } from '../../services/sidenav-service.service';

/**
 * Avatar Bar Component
 */
@Component({
  selector: 'app-avatar-bar',
  templateUrl: './avatar-bar.component.html',
})
export class AvatarBarComponent implements OnInit {
  /**
   * Bar is Enabled
   */
  @Input() enabled = true;
  /**
   * Name to Display
   */
  @Input() name = 'user';
  /**
   * Name to Display
   */
  @Input() email = 'mail@email.com';

  notificationCounter = 0;

  /**
   * is Mobile
   */
  mobile = false;

  /**
   * Constructor
   * @param sidenav side nav
   */
  constructor(private sidenav: SidenavServiceService) {}

  /**
   * Init Function
   */
  ngOnInit() {
    this.mobile = true;
  }

  /**
   * Toggle Side Navigation
   */
  toggleRightSidenav(): void {
    this.sidenav.toggle();
  }

  /**
   * Get greeting text
   */
  getGreeting(): string {
    const time = new Date().getHours(); // Determine part of the day
    if (time >= 22 || time < 5) {
      return 'Hello';
    } else if (time >= 18) {
      return 'Good Evening';
    } else if (time >= 12) {
      return 'Good Afternoon';
    } else {
      return 'Good Morning';
    } // Define the greetings
  }
}
