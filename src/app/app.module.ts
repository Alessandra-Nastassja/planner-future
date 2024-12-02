import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HttpResponseInterceptor } from './core/interceptors/http-response-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi:true
    },
  ],
})
export class AppModule { }
