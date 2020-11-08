import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonProperties} from "../common/common.properties";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  /**
   * Intercepts all http requests and pasts custom headers
   * @param request intercepted request
   * @param next transforms request into a stream
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpRequest = request.clone({
      headers: new HttpHeaders({
        "x-apikey": CommonProperties.API_KEY,
        "content-type": "application/json",
        "cache-control": "no-cache",
      })
    });

    return next.handle(httpRequest);
  }
}
