import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {Contact} from "./models/contact.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.downloadData()
  }

  onAddRow(contact: Contact): void {
    this.dataService.addRow(contact);
  }

  deleteRow(contact: Contact): void {
    this.dataService.deleteRow(contact);
  }

  updateRow(contact: Contact): void {
    this.dataService.updateRow(contact)
  }
}
