import {DataService} from './data.service';
import {HttpRequestProcessingService} from "./http-request-processing.service";
import {LoaderService} from "./loader.service";
import {Observable, of} from "rxjs";
import {Contact} from "../models/contact.model";

describe('DataService', () => {
  let service: DataService;
  const downloadedArray = [];
  const httpService = {
    get(url: string = ''): Observable<any> {
      return of(downloadedArray);
    },
    delete(url: string = ''): Observable<any> {
      return of([]);
    },
    post(url: string = '', contact: Contact): Observable<any> {
      return of([]);
    },
    put(url: string, contact: Contact): Observable<any> {
      return of([]);
    }
  } as HttpRequestProcessingService;
  const loaderService = {
    processObservable<T>(observable: Observable<T>): Observable<T> {
      return observable;
    }
  } as LoaderService;

  beforeEach(() => {
    service = new DataService(httpService, loaderService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should download data and update field', () => {
    service.data = [{} as Contact];
    service.downloadData();
    expect(service.data).toBe(downloadedArray);
  });

  it('should delete row in table and update data', () => {
    const spy = spyOn(httpService, 'delete').and.callThrough();
    const contactToDelete = {_id: '123'} as Contact;
    service.data = [{} as Contact];
    service.deleteRow(contactToDelete);
    expect(spy).toHaveBeenCalledWith(contactToDelete._id);
  });

  it('should add row in table and update data', () => {
    const spy = spyOn(httpService, 'post').and.callThrough();
    const contactToAdd = {_id: '123'} as Contact;
    service.data = [{} as Contact];
    service.addRow(contactToAdd);
    expect(spy).toHaveBeenCalledWith('', contactToAdd);
    expect(service.data).toBe(downloadedArray);
  });

  it('should update row in table and update data', () => {
    const spy = spyOn(httpService, 'put').and.callThrough();
    const contactToUpdate = {_id: '123'} as Contact;
    service.data = [{} as Contact];
    service.updateRow(contactToUpdate);
    expect(spy).toHaveBeenCalledWith(contactToUpdate._id, contactToUpdate);
    expect(service.data).toBe(downloadedArray);
  });
});
