import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { NgxEchartsModule } from 'ngx-echarts';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ChartsComponent } from './components/charts/charts.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChartsComponent,
    DataTablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    ChartModule,
    CardModule,
    TabViewModule,
    TableModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
