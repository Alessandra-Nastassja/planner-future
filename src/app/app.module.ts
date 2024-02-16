import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
