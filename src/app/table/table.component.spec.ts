import {TableComponent} from './table.component';
import {Contact} from "../models/contact.model";

describe('TableComponent', () => {
  let component: TableComponent;

  beforeEach(() => {
    component = new TableComponent();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const spy = spyOn(component.rowUpdated, 'emit');
    const contact = {} as Contact;
    component.changeContactFavouriteStatus(contact)
    expect(spy).toHaveBeenCalledWith(contact);
  });

  it('should delete row', () => {
    const spy = spyOn(component.rowDeleted, 'emit');
    const contact = {} as Contact;
    component.deleteRow(contact)
    expect(spy).toHaveBeenCalledWith(contact);
  });
});
