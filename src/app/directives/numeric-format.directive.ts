import {Directive, HostListener, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Directive({
  selector: '[appNumericFormat]'
})
export class NumericFormatDirective {
  /**
   * Listens to input event and changes format of number
   * @param event see
   */
  @HostListener('input', ['$event'])
  onInput(event) {
    if (this.controlField.value && event['data']) {
      const numbericString = this.controlField.value.replace(/\D/g,'');
      if (isNaN(event['data'])) {
        this.controlField.setValue(this.controlField.value.slice(0, this.controlField.value.length - 1))
      } else if (numbericString.length === 1 && this.controlField.value.length === 1) {
        this.controlField.setValue(('(').concat(this.controlField.value));
      } else if (numbericString.length === 4 && this.controlField.value.length === 5) {
        let symbolsArray = this.controlField.value.split('');
        symbolsArray.push(`) ${symbolsArray.pop()}`)
        this.controlField.setValue(symbolsArray.join(''))
      }  else if (numbericString.length === 7 && this.controlField.value.length === 10) {
        let symbolsArray = this.controlField.value.split('');
        symbolsArray.push(`-${symbolsArray.pop()}`)
        this.controlField.setValue(symbolsArray.join(''))
      } else if (numbericString.length === 9 && this.controlField.value.length === 13) {
        let symbolsArray = this.controlField.value.split('');
        symbolsArray.push(`-${symbolsArray.pop()}`)
        this.controlField.setValue(symbolsArray.join(''))
      }
    }
  }

  /**
   * Field to change
   */
  @Input('appNumericFormat')
  controlField: AbstractControl;

  /**
   * Creates instance of numeric directive
   */
  constructor() { }

}
