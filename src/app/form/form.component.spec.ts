import {FormComponent} from './form.component';
import createSpy = jasmine.createSpy;
import {FormControl} from "@angular/forms";

describe('FormComponent', () => {
  let component: FormComponent;

  beforeEach(() => {
    component = new FormComponent();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on onInit hook', () => {
    expect(component.addRowForm).toBeDefined();
  });

  it('should set errors if form is not valid', () => {
    component.addRowForm.controls['phoneNumber'].setValue('')
    const spy = spyOn(component.addRowForm.controls.phoneNumber, 'setErrors');
    component.submitForm();
    expect(spy).toHaveBeenCalledWith({incorrect: true});
  });

  it('should emit emitter for row adding', () => {
    component.addRowForm.controls['phoneNumber'].setValue('123456789112345');
    component.addRowForm.controls['surname'].setValue('testsurname');
    const spy = spyOn(component.rowAdded, 'emit');
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });

  it('should clear errors on control', () => {
    const control = new FormControl();
    control.setErrors({invalid: true});
    component.clearErrorsOnControl(control)
    expect(control.valid).toEqual(true);
  });

  it('should not do anything', () => {
    const control = new FormControl();
    control.setValue('test');
    component.clearErrorsOnControl(control)
    expect(control.valid).toEqual(true);
  });
});
