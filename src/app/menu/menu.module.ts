import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
