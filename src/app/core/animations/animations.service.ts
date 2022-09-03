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
   * Get Route Animation Type
   * @param pageAnimations Page Animations
   * @param elementsAnimations Elements Animations
   * @returns RouteAnimationType
   */
  private getAnimationType(
    pageAnimations: boolean,
    elementsAnimations: boolean
  ): RouteAnimationType {
    if (pageAnimations && elementsAnimations) {
      return 'ALL';
    }
    if (pageAnimations) {
      return 'PAGE';
    }
    if (elementsAnimations) {
      return 'ELEMENTS';
    }
    return 'NONE';
  }
  /**
   * Update Route Animation Type
   */
  updateRouteAnimationType(
    pageAnimations: boolean,
    elementsAnimations: boolean
  ) {
    AnimationsService.routeAnimationType = this.getAnimationType(
      pageAnimations,
      elementsAnimations
    );
  }
}
/**
 * Route Animation Type Export
 */
export type RouteAnimationType = 'ALL' | 'PAGE' | 'ELEMENTS' | 'NONE';
