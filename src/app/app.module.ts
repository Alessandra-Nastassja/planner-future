import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { TotalBalanceComponent } from './pages/total-balance/total-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalBalanceComponent
  ],
  imports: [
    CommonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
