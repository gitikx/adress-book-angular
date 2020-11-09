import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../models/contact.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  /**
   * Row added emitter
   */
  @Output()
  rowAdded: EventEmitter<Contact> = new EventEmitter();
  /**
   * Main form for contact adding
   */
  addRowForm: FormGroup;

  /**
   *Creates instance of contact input form
   */
  constructor() { }

  /**
   * On init hook. Initializes form.
   */
  ngOnInit(): void {
    this.addRowForm = new FormGroup({
      name: new FormControl('', {
        updateOn: 'submit'
      }),
      surname: new FormControl('', {
        validators: [
          Validators.required,
        ],
        updateOn: 'submit'
      }),
      patronymic: new FormControl('', {
        updateOn: 'submit'
      }),
      phoneNumber: new FormControl(''),
    });
  }

  /**
   * Submits forms if there are no errors
   */
  submitForm() {
    if (this.addRowForm.value.phoneNumber.length !== 15 || this.addRowForm.value.phoneNumber === '') {
      this.addRowForm.controls.phoneNumber.setErrors({incorrect: true})
    }
    if (!this.addRowForm.invalid) {
      this.rowAdded.emit({
        isFavourite: false,
        name: this.addRowForm.value.name,
        surname: this.addRowForm.value.surname,
        patronymic: this.addRowForm.value.patronymic,
        phoneNumber: '+7'.concat(this.addRowForm.value.phoneNumber),
      } as Contact);
      this.addRowForm.reset('');
      this.addRowForm.controls.surname.setErrors(null)
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
