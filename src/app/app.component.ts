import { Component, OnInit } from '@angular/core';
import { routeAnimations } from './core/animations/route.animations';
import { ThemeService } from './core/services/theme.service';
import { TokenStorageService } from './core/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  title = 'angular-seed-project';
  /**
   * Constructor
   * @param themeService theme Service
   * @param tokenStorageService token Storage Service
   */
  constructor(
    public themeService: ThemeService,
    private tokenStorageService: TokenStorageService
  ) {}

  /**
   * Init Component Function
   */
  ngOnInit(): void {
    this.themeService.onChangeTheme(this.tokenStorageService.getThemeState());
  }
}
