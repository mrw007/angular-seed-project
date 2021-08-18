import { Injectable } from '@angular/core';

/**
 * Animation Service
 */
@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  /**
   * Constructor
   */
  constructor() {
    AnimationsService.routeAnimationType = 'ALL';
  }

  /**
   * Route Animation Type
   */
  private static routeAnimationType: RouteAnimationType = 'ALL';

  /**
   * Is Route Animation Type
   */
  static isRouteAnimationsType(type: RouteAnimationType) {
    return AnimationsService.routeAnimationType === type;
  }
  /**
   * Update Route Animation Type
   */
  updateRouteAnimationType(
    pageAnimations: boolean,
    elementsAnimations: boolean
  ) {
    AnimationsService.routeAnimationType =
      pageAnimations && elementsAnimations
        ? 'ALL'
        : pageAnimations
        ? 'PAGE'
        : elementsAnimations
        ? 'ELEMENTS'
        : 'NONE';
  }
}
/**
 * Route Animation Type Export
 */
export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';
