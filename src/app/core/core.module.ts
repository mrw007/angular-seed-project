import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsService } from './animations/animations.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    AnimationsService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that core Module is loaded once only accross the app

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
