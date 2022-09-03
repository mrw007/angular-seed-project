import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { SecureComponent } from './secure.component';

describe('SecureComponent', () => {
  let fixture: ComponentFixture<SecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecureComponent],
      providers: [RouterModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureComponent);
    fixture.detectChanges();
  });
});
