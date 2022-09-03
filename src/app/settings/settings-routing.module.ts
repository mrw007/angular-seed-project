import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'changelog',
        component: ChangelogComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
