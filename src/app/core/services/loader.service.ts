import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * loader Service
 */
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  /**
   * Is Loading
   */
  isLoading = new Subject<boolean>();

  /**
   * Percentage loader
   */
  percentage = new Subject<number>();

  /**
   * Show Loader
   */
  show(): void {
    setTimeout(() => this.isLoading.next(true));
  }

  /**
   * Hide Loader
   */
  hide(): void {
    setTimeout(() => this.isLoading.next(false));
  }

  /**
   * Increment loader value
   */
  loadingPercentage(loaded: number): void {
    this.percentage.next(loaded);
  }
}
