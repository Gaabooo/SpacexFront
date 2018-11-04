import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FlightsComponent } from './user/flights/flights.component';
import { LaunchsiteComponent } from './user/launchsite/launchsite.component';

const routes: Routes = [
  { path: '', redirectTo: '/flights', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flights/:id', component: LaunchsiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }