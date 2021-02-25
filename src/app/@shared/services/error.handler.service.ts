import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { LocalStorageUtils } from '../../utils/localStorage'
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  private localStorageUtil: LocalStorageUtils = new LocalStorageUtils();

  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>  {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpResponse) {
          switch (error.status) {
            case 401:
              this.localStorageUtil.limparDadosLocaisUsuario();
              return this.router.navigate(['/conta/login']);
            case 403:
              return this.router.navigate(['/acesso/negado']);
          }
        }
        return throwError(error);
      }),
    );
  }
}
