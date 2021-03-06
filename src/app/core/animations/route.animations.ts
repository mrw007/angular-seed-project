import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence,
} from '@angular/animations';
import { AnimationsService } from './animations.service';

/**
 * Route Animation Elements
 */
export const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

/**
 * All Steps
 */
const STEPS_ALL: any[] = [
  query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
    optional: true,
  }),
  query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
    optional: true,
  }),
  sequence([
    query(
      ':leave > *',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateY(-3%)', opacity: 0 })
        ),
        style({ position: 'fixed' }),
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({
          transform: 'translateY(-3%)',
          opacity: 0,
          position: 'static',
        }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        ),
      ],
      { optional: true }
    ),
  ]),
  query(
    ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
    stagger(75, [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate(
        '0.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      ),
    ]),
    { optional: true }
  ),
];

/**
 * No Steps
 */
const STEPS_NONE: any[] = [];

/**
 * Only Page Steps
 */
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];

/**
 * Elements Steps
 */
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];

/**
 * Route Animations
 */
export const routeAnimations = trigger('routeAnimations', [
  transition(isRouteAnimationsAll, STEPS_ALL),
  transition(isRouteAnimationsNone, STEPS_NONE),
  transition(isRouteAnimationsPage, STEPS_PAGE),
  transition(isRouteAnimationsElements, STEPS_ELEMENTS),
]);

/**
 * Is Route Animations All
 */
export function isRouteAnimationsAll() {
  return AnimationsService.isRouteAnimationsType('ALL');
}

/**
 * Is Route Animations None
 */
export function isRouteAnimationsNone() {
  return AnimationsService.isRouteAnimationsType('NONE');
}

/**
 * Is Route Animations Page
 */
export function isRouteAnimationsPage() {
  return AnimationsService.isRouteAnimationsType('PAGE');
}

/**
 * Is Route Animations Elements
 */
export function isRouteAnimationsElements() {
  return AnimationsService.isRouteAnimationsType('ELEMENTS');
}
