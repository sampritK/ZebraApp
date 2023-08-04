import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { ReportComponent } from './menu/report/report.component';
import { HomeComponent } from './menu/home/home.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'report', component:ReportComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
