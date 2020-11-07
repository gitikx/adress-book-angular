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
  data: any[];
  /**
   * Row deletion emitter
   */
  @Output()
  rowDeleted = new EventEmitter();
  /**
   * Row update emitter
   */
  @Output()
  rowUpdated = new EventEmitter();

  columns: any = [...Contact.getFieldsNames(), 'delete'];

  constructor() {
  }

  deleteRow(contact: Contact) {
    this.rowDeleted.emit(contact);
  }

  changeContactFavouriteStatus(contact: Contact) {
    contact.isFavourite = !contact.isFavourite;
    this.rowUpdated.emit(contact);
  }
}
