import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

/**
 * Loader Interceptor
 */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  /**
   * Total Requests Counter
   */
  private totalRequests = 0;

  /**
   * Constructor
   * @param loaderService loader Service
   */
  constructor(public loaderService: LoaderService) {}

  /**
   * Intercept Function
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => {
        const percentage = this.getPercantage();
        this.totalRequests--;
        this.loaderService.loadingPercentage(percentage);
        if (this.totalRequests === 0) {
          setTimeout(() => this.loaderService.hide(), 1000);
        }
      })
    );
  }

  /**
   * Get Percentage relative to the number of requests
   * @returns number
   */
  getPercantage(): number {
    return Math.round(100 / this.totalRequests);
  }
}
