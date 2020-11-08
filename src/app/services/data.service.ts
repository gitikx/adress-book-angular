import {Injectable} from '@angular/core';
import {Contact} from "../models/contact.model";
import {HttpRequestProcessingService} from "./http-request-processing.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
   * Collection of contacts
   */
  data: Contact[] = [];

  /**
   * Creates instance
   * @param httpRequestService
   */
  constructor(private httpRequestService: HttpRequestProcessingService) {
  }

  /**
   * Downloads and saves data from database
   */
  downloadData(): void {
    this.httpRequestService.get().subscribe((result: Contact[]) => {
      this.data = result;
    })
  }

  /**
   * Adds row to the database
   * @param contact
   */
  addRow(contact: Contact): void {
    this.httpRequestService.post('', contact).subscribe(() => {
      this.downloadData();
    });
  }

  /**
   * Deletes row from database
   * @param contact
   */
  deleteRow(contact: Contact): void {
    this.httpRequestService.delete(contact._id).subscribe(() => {
      this.downloadData();
    });
  }

  /**
   * Updates row in database
   * @param contact
   */
  updateRow(contact: Contact): void {
    this.httpRequestService.put(contact._id, contact).subscribe(() => {
      this.downloadData();
    });
  }
}
