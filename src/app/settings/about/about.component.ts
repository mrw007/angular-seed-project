import { Component, VERSION } from '@angular/core';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  /**
   * App Version
   */
  public version;
  /**
   * Angular version
   */
  public angularVersion;

  /**
   * Get Date
   */
  public toDay = new Date();
  /**
   * Constructor
   */
  constructor() {
    this.version = packageInfo.version;
    this.angularVersion = VERSION.full;
  }
}
