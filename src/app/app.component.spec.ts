import {AppComponent} from './app.component';
import {DataService} from "./services/data.service";
import {LoaderService} from "./services/loader.service";
import {Contact} from "./models/contact.model";

describe('AppComponent', () => {
  let component: AppComponent;
  const dataService = {
    downloadData() {
    },
    addRow(contact: Contact) {
    },
    deleteRow(contact: Contact) {
    },
    updateRow(contact: Contact) {
    }
  } as DataService;
  const loaderService = {} as LoaderService;
  beforeEach(async () => {
    component = new AppComponent(dataService, loaderService);
    component.ngOnInit();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data', () => {
    const spy = spyOn(dataService, 'downloadData');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should add row', () => {
    const spy = spyOn(dataService, 'addRow');
    const contact = {} as Contact;
    component.onAddRow(contact);
    expect(spy).toHaveBeenCalledWith(contact);
  });

  it('should delete row', () => {
    const spy = spyOn(dataService, 'deleteRow');
    const contact = {} as Contact;
    component.deleteRow(contact);
    expect(spy).toHaveBeenCalledWith(contact);
  });

  it('should update row', () => {
    const spy = spyOn(dataService, 'updateRow');
    const contact = {} as Contact;
    component.updateRow(contact);
    expect(spy).toHaveBeenCalledWith(contact);
  });
});
