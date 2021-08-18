import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsService } from './animations/animations.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AnimationsService],
})
export class CoreModule {}
