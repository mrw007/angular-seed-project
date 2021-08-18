import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';

/**
 * Theme Service
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * Class List
   */
  classList = ['default-theme', 'black-theme'];
  /**
   * Selected Theme
   */
  selectedTheme = 'default-theme';
  /**
   * Not Default Theme
   */
  notDefaultTheme: boolean;

  /**
   * Constructor
   * @param overlayContainer
   * @param tokenStorageService
   */
  constructor(
    private overlayContainer: OverlayContainer,
    private tokenStorageService: TokenStorageService
  ) {
    this.notDefaultTheme = tokenStorageService.getThemeState();
  }
  /**
   * On Change Theme
   */
  onChangeTheme(isChecked: boolean) {
    // subscribe to some source of theme change events, then...
    if (isChecked) {
      this.selectedTheme = 'black-theme';
      this.tokenStorageService.setThemeState('true');
      this.notDefaultTheme = true;
    } else {
      this.selectedTheme = 'default-theme';
      this.tokenStorageService.setThemeState('false');
      this.notDefaultTheme = false;
    }

    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement()
      .classList;
    const themeClassesToRemove = Array.from(
      this.classList
    ).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.selectedTheme);
  }
}
