import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const t0 = performance.now();
    let interval;

    console.log('processing request', request);
    interval = this.calculateStartTimeInterval(t0);

    return next.handle(request).pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      }),
      catchError((response) => {
        if (response instanceof HttpErrorResponse) {
          console.log('processing http error', response);

          switch (response.status) {
            case 401:
              console.log('401');
              break;
              
              default:
                console.log('error default');
              break;
          }
        }

        return throwError(response);
      }),
      finalize(() => {
        this.calculateFinichedInterval(t0);
        clearInterval(interval);
      }),
    );
  }

  private calculateStartTimeInterval(t0: any) {
    return setInterval(() => {
      const t1 = performance.now();
      const responseTime = (t1 - t0) / 1000;
      console.log(`Request took ${responseTime} ms since start`);
    }, 10);
  }

  private calculateFinichedInterval(t0: any) {
    const t1 = performance.now();
    const totalResponseTime = (t1 - t0) / 1000;
    console.log(`Request finished: took ${totalResponseTime} ms`);
  }
}
