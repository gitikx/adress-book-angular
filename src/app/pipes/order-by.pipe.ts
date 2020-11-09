import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../models/contact.model";

@Pipe({
  name: 'orderContacts'
})
export class OrderContactsPipe implements PipeTransform {
  /**
   * Orders contact by status favourite
   * @param contacts specified contacts to sort
   */
  transform(contacts: Contact[]): Contact[] {
    return contacts.sort((elementA, elementB) => {
      if (elementA.isFavourite == elementB.isFavourite) return 0;
      else if (elementA.isFavourite && !elementB.isFavourite) return -1;
      else return 1;
    })
  }

}
