import * as fromRouter from '@ngrx/router-store';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

/**
 * Router State Interface
 */
export interface RouterStateUrl {
  /**
   * URL
   */
  url: string;
  /**
   * Query Parameters
   */
  queryParams: Params;
  /**
   * Parameters
   */
  params: Params;
}

/**
 * State Interface
 */
export interface State {
  /**
   * Router Reducer
   */
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Reducers List
 */
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

/**
 * Router State Selector
 */
export const getRouterState =
  createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    'routerReducer'
  );

/**
 * Router default Selectors
 */
export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getRouterSelectors(getRouterState);

/**
 * Custom Route Seralizer
 */
@Injectable()
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl>
{
  /**
   * Serialize Function
   */
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
