import { HttpInterceptorFn } from '@angular/common/http';

export const httpResponseInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
