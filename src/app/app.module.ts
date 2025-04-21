import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
