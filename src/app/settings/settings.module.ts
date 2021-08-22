import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavServiceService } from '../shared/services/sidenav-service.service';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule,SharedModule, SettingsRoutingModule],
  providers: [SidenavServiceService, DatePipe],
})
export class SettingsModule {}
