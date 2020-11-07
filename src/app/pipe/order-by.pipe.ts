import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../models/contact.model";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value:Contact[]): Contact[] {
    return value.sort((elementA, elementB) => {
      if (elementA.isFavourite == elementB.isFavourite) return 0;
      else if (elementA.isFavourite && !elementB.isFavourite) return -1;
      else return 1;
    })
  }

}
