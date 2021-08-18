import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarBarComponent } from './components/avatar-bar/avatar-bar.component';

@NgModule({
  declarations: [LoaderComponent, AvatarComponent, AvatarBarComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    AvatarComponent,
    AvatarBarComponent,
  ],
})
export class SharedModule {}
