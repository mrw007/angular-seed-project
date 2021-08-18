import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

/**
 * Go Action Type
 */
export const GO = '[Router] Go';

/**
 * Back Action Type
 */
export const BACK = '[Router] Back';

/**
 * Forward Action Type
 */
export const FORWARD = '[Router] Forward';

/**
 * Go to Specific Route Action
 */
export class Go implements Action {
  /**
   * Action Type
   */
  readonly type = GO;
  /**
   * Constructor
   * @param payload Payload
   */
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

/**
 * Back to previous Route Action
 */
export class Back implements Action {
  /**
   * Action Type
   */
  readonly type = BACK;
}

/**
 * Go Forward Action
 */
export class Forward implements Action {
  /**
   * Action Type
   */
  readonly type = FORWARD;
}

export type Actions = Go | Back | Forward;
