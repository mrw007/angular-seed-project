import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routeAnimations } from '../core/animations/route.animations';

/**
 * Small Width Breakpoint
 */
const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
    selector: 'app-secure',
    templateUrl: './secure.component.html',
    animations: [routeAnimations],
    standalone: false
})
export class SecureComponent implements OnInit {
  /**
   * Media Matcher
   */
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  /**
   * Constructor
   * @param zone NgZone
   * @param router Router
   */
  constructor(zone: NgZone, public router: Router) {
    this.mediaMatcher.addEventListener('change', () =>
      zone.runOutsideAngular(
        () =>
          (this.mediaMatcher = matchMedia(
            `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
          ))
      )
    );
  }

  ngOnInit(): void {
    console.log('Secure Module');
  }

  /**
   * Check Screen size
   */
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
