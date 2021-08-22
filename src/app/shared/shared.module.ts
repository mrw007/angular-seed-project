import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarBarComponent } from './components/avatar-bar/avatar-bar.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [LoaderComponent, AvatarComponent, AvatarBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    AvatarComponent,
    AvatarBarComponent,
    MarkdownModule,
  ],
})
export class SharedModule {}
