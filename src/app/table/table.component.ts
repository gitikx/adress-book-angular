import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "../models/contact.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  /**
   * Collection of contacts
   */
  @Input()
  data: Contact[];
  /**
   * Row deletion emitter
   */
  @Output()
  rowDeleted: EventEmitter<Contact> = new EventEmitter();
  /**
   * Row update emitter
   */
  @Output()
  rowUpdated: EventEmitter<Contact> = new EventEmitter();
  /**
   * Table columns
   */
  columns: string[] = [...Contact.getFieldsNames(), 'delete'];

  /**
   * Creates table component instance
   */
  constructor() { }

  /**
   * Deletes row
   * @param contact contact to delete
   */
  deleteRow(contact: Contact): void {
    this.rowDeleted.emit(contact);
  }

  /**
   * Changes contact favourite status
   * @param contact contact to change favourite status
   */
  changeContactFavouriteStatus(contact: Contact): void {
    contact.isFavourite = !contact.isFavourite;
    this.rowUpdated.emit(contact);
  }
}
