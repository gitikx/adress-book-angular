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
  constructor(private httpService: HttpClient) { }

  /**
   * Makes get request on specified url
   * @param url specified url
   */
  get(url: string = ''): Observable<any> {
    return this.httpService.get(CommonProperties.DATABASE_URL + url)
  }

  /**
   * Makes post request on specified url with specified parameters
   * @param url specified url
   * @param contact specified parameters
   */
  post(url: string = '', contact: Contact): Observable<any> {
    return this.httpService.post(CommonProperties.DATABASE_URL + url, contact)
  }

  /**
   * Makes delete request on specified url
   * @param url specified url
   */
  delete(url: string = ''): Observable<any> {
    return this.httpService.delete(CommonProperties.DATABASE_URL.concat(`/${url}`))
  }

  /**
   * Makes put request on specified url with specified parameters
   * @param url specified url
   * @param contact specified parameters
   */
  put(url: string, contact: Contact): Observable<any> {
    return this.httpService.put(CommonProperties.DATABASE_URL.concat(`/${url}`), contact)
  }
}
