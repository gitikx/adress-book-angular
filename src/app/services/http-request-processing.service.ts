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
   * Create instance of http request processing service
   * @param httpService
   */
  constructor(private httpService: HttpClient) {

  }

  get(url: string = ''): Observable<any> {
    return this.httpService.get(CommonProperties.DATABASE_URL + url)
  }

  post(url: string = '', contact: Contact): Observable<any> {
    return this.httpService.post(CommonProperties.DATABASE_URL + url, contact)
  }

  delete(url: string = ''): Observable<any> {
    return this.httpService.delete(CommonProperties.DATABASE_URL.concat(`/${url}`))
  }

  put(url: string, contact: Contact): Observable<any> {
    return this.httpService.put(CommonProperties.DATABASE_URL.concat(`/${url}`), contact)
  }
}
