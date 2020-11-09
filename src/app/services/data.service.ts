import {Injectable} from '@angular/core';
import {Contact} from "../models/contact.model";
import {HttpRequestProcessingService} from "./http-request-processing.service";
import {LoaderService} from "./loader.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
   * Collection of contacts
   */
  data: Contact[] = [];

  /**
   * Creates data service instance
   * @param httpRequestService
   * @param loaderService
   */
  constructor(private httpRequestService: HttpRequestProcessingService,
              private loaderService: LoaderService) {
  }

  /**
   * Downloads and saves data from database
   */
  downloadData(): void {
    this.loaderService.processObservable(this.httpRequestService.get()).subscribe((result: Contact[]) => {
      this.data = result;
    })
  }

  /**
   * Adds row to the database
   * @param contact contact to add
   */
  addRow(contact: Contact): void {
    this.loaderService.processObservable(this.httpRequestService.post('', contact)).subscribe(() => {
      this.downloadData();
    });
  }

  /**
   * Deletes row from database
   * @param contact contact to delete
   */
  deleteRow(contact: Contact): void {
    this.loaderService.processObservable(this.httpRequestService.delete(contact._id)).subscribe(() => {
      this.downloadData();
    });
  }

  /**
   * Updates row in database
   * @param contact contact to update
   */
  updateRow(contact: Contact): void {
    this.loaderService.processObservable(this.httpRequestService.put(contact._id, contact)).subscribe(() => {
      this.downloadData();
    });
  }
}
