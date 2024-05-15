import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTg5MTUxNTViNWU1NTY0MmVmY2M2NzMxN2U5NzNhMCIsInN1YiI6IjYwYjk0NTc4ZWM4YTQzMDA2ZWZlZmU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HvSVpgCfPRnjfNHBoxDZF0-yf1CQSxeSNpwOHz1ysdk',
      },
    });

    return next.handle(authReq);
  }
}
