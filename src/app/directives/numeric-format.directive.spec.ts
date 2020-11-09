import {NumericFormatDirective} from './numeric-format.directive';
import {AbstractControl} from "@angular/forms";

describe('NumericFormatDirective', () => {
  let directive;

  beforeEach(() => {
    directive = new NumericFormatDirective();
    directive.controlField = {
      value: '',
      setValue(value: any, options?: Object) {
        this.value = value;
      }
    } as AbstractControl;
  })

  it('should not change correct stroke', () => {
    directive.controlField.value = '(132';
    directive.onInput({});
    expect(directive.controlField.value).toEqual('(132');
  });

  it('should change 4th symbol', () => {
    directive.controlField.value = '(1324';
    directive.onInput({data: 3});
    expect(directive.controlField.value).toEqual('(132) 4');
  });

  it('should delete symbol', () => {
    directive.controlField.value = '(132';
    directive.onInput({data: {}});
    expect(directive.controlField.value).toEqual('(13');
  });

  it('should add open bracket on the beginning', () => {
    directive.controlField.value = '1';
    directive.onInput({data: 1});
    expect(directive.controlField.value).toEqual('(1');
  });

  it('should add first "-" symbol', () => {
    directive.controlField.value = '(123) 3456';
    directive.onInput({data: 6});
    expect(directive.controlField.value).toEqual('(123) 345-6');
  });

  it('should add first "-" symbol', () => {
    directive.controlField.value = '(123) 345-678';
    directive.onInput({data: 6});
    expect(directive.controlField.value).toEqual('(123) 345-67-8');
  });

  it('should not change anything', () => {
    directive.controlField.value = '(123) 345-67-324';
    directive.onInput({data: 6});
    expect(directive.controlField.value).toEqual('(123) 345-67-324');
  });
});
