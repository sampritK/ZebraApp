import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';





@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ReportComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule 
  ]
})
export class MenuModule { }
