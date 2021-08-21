import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AvatarBarComponent } from './avatar-bar.component';

describe('AvatarBarComponent', () => {
  let component: AvatarBarComponent;
  let fixture: ComponentFixture<AvatarBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AvatarBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
