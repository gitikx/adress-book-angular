import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../models/contact.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output()
  rowAdded: EventEmitter<Contact> = new EventEmitter();

  addRowForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.addRowForm = new FormGroup({
      name: new FormControl('', {
        validators: [
          Validators.required,
        ],
        updateOn: 'submit'
      }),
      surname: new FormControl('', {
        validators: [
          Validators.required,
        ],
        updateOn: 'submit'
      }),
      patronymic: new FormControl('', {
        validators: [
          Validators.required,
        ],
        updateOn: 'submit'
      }),
      phoneNumber: new FormControl(null, {
        validators: [
          Validators.required,
        ],
        updateOn: 'change'
      }),
    });
  }

  /**
   * Submits forms if there are no errors
   */
  submitForm() {
    if (this.addRowForm.value.phoneNumber && this.addRowForm.value.phoneNumber.length !== 14) {
      this.addRowForm.controls.phoneNumber.setErrors({'incorrect': true})
    }
    if (!this.addRowForm.invalid) {
      this.rowAdded.emit({
        isFavourite: false,
        name: this.addRowForm.value.name,
        surname: this.addRowForm.value.surname,
        patronymic: this.addRowForm.value.patronymic,
        phoneNumber: '+7'.concat(this.addRowForm.value.phoneNumber),
      } as Contact);
    }
  }

  /**
   * Formats number stroke to mask (XXX)XXX-XX-XX
   * @param event
   */
  formatNumber(event: Event): void {
    const control = this.addRowForm.controls.phoneNumber;

    if (control.value && event['data']) {
      if (control.value.length === 1) {
        control.setValue(('(').concat(control.value));
      } else if (control.value.length === 4) {
        control.setValue(control.value.concat(')'))
      } else if (control.value.length === 8) {
        control.setValue(control.value.concat('-'))
      } else if (control.value.length === 11) {
        control.setValue(control.value.concat('-'))
      }
    }
  }

  /**
   * Clears errors on specified control
   * @param control specified control
   */
  clearErrorsOnControl(control: AbstractControl): void {
    if (control.invalid) {
      control.setErrors(null);
    }
  }
}
