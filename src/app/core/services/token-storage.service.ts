import { Injectable } from '@angular/core';

/**
 * Token Storage Service
 */
@Injectable({
  providedIn: 'root',
})

/**
 * Token Storage Methods
 */
export class TokenStorageService {
  /**
   * Get theme state
   * @returns string
   */
  public getThemeState(): boolean {
    const themeState: boolean = JSON.parse(
      localStorage.getItem('themeState') || 'false'
    );
    return themeState;
  }

  /**
   * Set theme state
   * @returns TokenStorageService
   */
  public setThemeState(themeState: string): TokenStorageService {
    localStorage.setItem('themeState', themeState);
    return this;
  }
}
