import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as RouterActions from '../actions/router.action';

import { tap, map } from 'rxjs/operators';

/**
 * Router Effects
 */
@Injectable()
export class RouterEffects {
  /**
   * Constructor
   * @param actions$ Actions
   * @param router Router
   * @param location Location
   */
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  /**
   * Go
   */
  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.GO),
        map((action: RouterActions.Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  /**
   * Back
   */
  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.BACK),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  /**
   * Forward
   */
  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.FORWARD),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );
}
