import { OrderContactsPipe } from './order-by.pipe';
import {Contact} from "../models/contact.model";

describe('OrderContactsPipe', () => {
  it('should order contacts', () => {
    const pipe = new OrderContactsPipe();
    const array = [{isFavourite: false} as Contact, {isFavourite: true} as Contact, {isFavourite: false} as Contact]
    expect(pipe.transform(array)).toEqual(array.reverse());
  });


});
