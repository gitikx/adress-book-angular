import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact.model";
import {CommonProperties} from "../common/common.properties";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestProcessingService {
  /**
   * Default headers for
   * @private
   */
  private static readonly DEFAULT_HTTP_HEADERS = {
    "x-apikey": CommonProperties.API_KEY,
    "content-type": "application/json",
    "cache-control": "no-cache",
  }

  /**
   * Create instance of http request processing service
   * @param httpService
   */
  constructor(private httpService: HttpClient) {

  }

  get(url: string = ''): Observable<any> {
    return this.httpService.get(CommonProperties.DATABASE_URL + url, {
      headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
    })
  }

  post(url: string = '', contact: Contact): Observable<any> {
    return this.httpService.post(
      CommonProperties.DATABASE_URL + url,
      contact,
      {
        headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
      }
    )
  }

  delete(url: string = ''): Observable<any> {
    return this.httpService.delete(
      CommonProperties.DATABASE_URL.concat(`/${url}`),
      {
        headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
      }
    )
  }

  put(url: string, contact: Contact): Observable<any> {
    return this.httpService.put(
      CommonProperties.DATABASE_URL.concat(`/${url}`),
      contact,
      {
        headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
      }
    )
  }
}
