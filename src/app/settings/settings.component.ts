import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { routeAnimations } from '../core/animations/route.animations';
import { ThemeService } from '../core/services/theme.service';
import { SidenavServiceService } from '../shared/services/sidenav-service.service';

/**
 * Small Width Breakpoint Value
 */
const SMALL_WIDTH_BREAKPOINT = 1280;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  animations: [routeAnimations],
})
export class SettingsComponent implements OnInit, AfterViewChecked {
  /**
   * Media Matcher
   */
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  /**
   * Side Navigation Component
   */
  /**
   * Side Navigation Component
   */

  @ViewChild('sidenav', { static: true })
  public sidenav!: MatSidenav;

  /**
   * Name
   */
  name: string;
  /**
   * email
   */
  email: string;

  constructor(
    private sidenavService: SidenavServiceService,
    zone: NgZone,
    private cdRef: ChangeDetectorRef,
    public router: Router,
    public themeService: ThemeService
  ) {
    this.name = 'Wahib Kerkeni';
    this.email = 'mr.wahib@gmail.com';
    this.mediaMatcher.addEventListener('change', () =>
      zone.runOutsideAngular(
        () =>
          (this.mediaMatcher = matchMedia(
            `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
          ))
      )
    );
  }

  /**
   * Init Function
   */
  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  /**
   * Agter View Checked Function
   */
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  /**
   * Check Screen Size
   */
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  /**
   * Close Side Navigation
   */
  closeNav() {
    if (this.isScreenSmall() === true) {
      this.sidenav.close();
    }
  }
}
