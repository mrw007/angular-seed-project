import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AvatarBarComponent } from './avatar-bar.component';

describe('AvatarBarComponent', () => {
  let fixture: ComponentFixture<AvatarBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AvatarBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarBarComponent);
    fixture.detectChanges();
  });
});
