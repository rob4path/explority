import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, mergeMap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   const token = localStorage.getItem('authToken');
  //   let headers = req.headers;
  //   if (token) {
  //     headers = req.headers.append('Authorization', `Bearer ${token}`);
  //   }
  //   if (
  //     !req.url.startsWith('/assets') &&
  //     !req.url.startsWith('https://') &&
  //     !req.url.startsWith('http://')
  //   ) {
  //     const url = `${environment.apiUrl}/${req.url}`;
  //     const apiReq = req.clone({
  //       url,
  //       headers,
  //     });
  //     return next.handle(apiReq);
  //   }
  //   return next.handle(req);
  // }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.auth.token$.pipe(
      take(1),
      mergeMap((token) => {
        let headers = req.headers;
        if (token) {
          headers = req.headers.append('Authorization', `Bearer ${token}`);
        }
        if (
          !req.url.startsWith('/assets') &&
          !req.url.startsWith('https://') &&
          !req.url.startsWith('http://')
        ) {
          const url = `${environment.apiUrl}${req.url}`;
          const apiReq = req.clone({
            url,
            headers,
          });
          return next.handle(apiReq);
        }
        return next.handle(req);
      }),
      catchError((err) => {
        const { status } = err;
        if (status === 401) {
          this.auth.clearLocalStorage();
        }
        throw err;
      })
    );
  }
}
