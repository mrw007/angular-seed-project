import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

/**
 * Side Navigation Control Service
 */
@Injectable({
  providedIn: 'root',
})
export class SidenavServiceService {
  /**
   * Side Navigation Component
   */
  private sidenav: MatSidenav | undefined;

  /**
   * Init the Side Navigation
   */
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  /**
   * Open Side Navigation
   */
  public open() {
    return this.sidenav?.open();
  }

  /**
   * Close Side Navigation
   */
  public close() {
    return this.sidenav?.close();
  }

  /**
   * Toggle Side Navigation
   */
  public toggle(): void {
    this.sidenav?.toggle();
  }
}
