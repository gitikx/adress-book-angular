import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {Contact} from "./models/contact.model";
import {LoaderService} from "./services/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Creates app component instance
   * @param dataService
   * @param loaderService
   */
  constructor(public dataService: DataService,
              public loaderService: LoaderService) {
  }

  /**
   * On init hook. Downloads data.
   */
  ngOnInit(): void {
    this.dataService.downloadData()
  }

  /**
   * Adds row in table
   * @param contact contact to add
   */
  onAddRow(contact: Contact): void {
    this.dataService.addRow(contact);
  }

  /**
   * Deletes row from table
   * @param contact contact to add
   */
  deleteRow(contact: Contact): void {
    this.dataService.deleteRow(contact);
  }

  /**
   * Updates row in table
   * @param contact contact to add
   */
  updateRow(contact: Contact): void {
    this.dataService.updateRow(contact)
  }
}
