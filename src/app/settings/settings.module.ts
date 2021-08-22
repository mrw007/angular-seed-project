import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavServiceService } from '../shared/services/sidenav-service.service';
import { AboutComponent } from './about/about.component';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
  declarations: [SettingsComponent, AboutComponent, ChangelogComponent],
  imports: [CommonModule,SharedModule, SettingsRoutingModule],
  providers: [SidenavServiceService, DatePipe],
})
export class SettingsModule {}
