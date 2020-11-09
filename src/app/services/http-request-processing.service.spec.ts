import {HttpRequestProcessingService} from './http-request-processing.service';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {CommonProperties} from "../common/common.properties";
import {Contact} from "../models/contact.model";

describe('HttpRequestProcessingService', () => {
  let service: HttpRequestProcessingService;
  const httpClient = {
    get: (url, options) => {
      return of();
    },
    post: (url, body, options) => {
      return of();
    },
    delete: (url, options) => {
      return of();
    },
    put: (url, options) => {
      return of();
    }
  } as HttpClient;
  beforeEach(() => {
    service = new HttpRequestProcessingService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get request with specified params', () => {
    const spy = spyOn(httpClient, 'get');
    service.get('url');
    expect(spy).toHaveBeenCalledWith(CommonProperties.DATABASE_URL + 'url');
  });

  it('should make a get request with empty url', () => {
    const spy = spyOn(httpClient, 'get');
    service.get();
    expect(spy).toHaveBeenCalledWith(CommonProperties.DATABASE_URL + '');
  });

  it('should make a post request with specified params', () => {
    const spy = spyOn(httpClient, 'post');
    const contact = {} as Contact;
    service.post('url', contact);
    expect(spy).toHaveBeenCalledWith(CommonProperties.DATABASE_URL + 'url', contact);
  });

  it('should make a post request with empty url and specified params', () => {
    const spy = spyOn(httpClient, 'post');
    const contact = {} as Contact;
    service.post(undefined, contact);
    expect(spy).toHaveBeenCalledWith(CommonProperties.DATABASE_URL + '', contact);
  });

  it('should make a delete request with specified params', () => {
    const spy = spyOn(httpClient, 'delete');
    service.delete('url');
    expect(spy).toHaveBeenCalledWith(CommonProperties.DATABASE_URL + '/url');
  });

  it('should make a delete request with empty url', () => {
    const spy = spyOn(httpClient, 'delete');
    service.delete();
    expect(spy).toHaveBeenCalledWith(CommonProperties.DATABASE_URL + '/');
  });

  it('should make a put request with specified params', () => {
    const spy = spyOn(httpClient, 'put');
    const contact = {} as Contact;
    service.put('url', contact);
    expect(spy).toHaveBeenCalledWith(CommonProperties.DATABASE_URL + '/url', contact);
  });
});
