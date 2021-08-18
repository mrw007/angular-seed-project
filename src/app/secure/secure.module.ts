import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SidenavServiceService } from '../shared/services/sidenav-service.service';

@NgModule({
  declarations: [SecureComponent, HomeComponent],
  imports: [CommonModule, SecureRoutingModule, SharedModule],
  exports: [SharedModule],
  providers: [SidenavServiceService],
})
export class SecureModule {}
