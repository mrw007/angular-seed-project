import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent, MatProgressBarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    fixture.detectChanges();
  });
});
