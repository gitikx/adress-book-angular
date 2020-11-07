/**
 * Class that represent Contact instance.
 */
export class Contact {
  /**
   * Contact identifier
   * @private
   */
  _id: string;
  /**
   * Getter for identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   * Contact name
   */
  name: string;
  /**
   * Contant surname
   */
  surname: string;
  /**
   * Contact patronymic
   */
  patronymic: string;
  /**
   * Flag for mark contact as favourite
   */
  isFavourite: boolean;
  /**
   * Contact phone number
   */
  phoneNumber: string;

  /**
   * Creates instance of contact
   * @param name specified name
   * @param surname specified surname
   * @param patronymic specified patronymic
   * @param isFavourite specified isFavourite flag
   * @param phoneNumber specified phone number
   */
  constructor(name: string, surname: string, patronymic: string, isFavourite: boolean, phoneNumber: string) {
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
    this.isFavourite = isFavourite;
    this.phoneNumber = phoneNumber;
  }

  /**
   * Return string array of contact properties
   */
  static getFieldsNames(): string[] {
    return ['isFavourite', 'surname', 'name', 'patronymic', 'phoneNumber'];
  }
}
