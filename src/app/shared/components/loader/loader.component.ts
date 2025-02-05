import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

import { LoaderService } from 'src/app/core/services/loader.service';
import { Subject } from 'rxjs';
import { ProgressBarMode } from '@angular/material/progress-bar';

/**
 * Loader Component
 */
@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    standalone: false
})
export class LoaderComponent implements AfterViewChecked {
  /**
   * Color
   */
  color = 'accent';

  /**
   * Mode
   */
  mode: ProgressBarMode = 'determinate';

  /**
   * Size
   */
  value: Subject<number> = this.loaderService.percentage;

  /**
   * Is Loading
   */
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  /**
   * Constructor
   * @param loaderService loader Service
   * @param cdRef cdRef
   */
  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef
  ) {}

  /**
   * After View Checked
   */
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
