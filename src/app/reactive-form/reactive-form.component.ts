import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {CustomValidators} from './../custom.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        CustomValidators.checkSpacing
      ]),
      password: new FormControl('', [
        Validators.required,
        CustomValidators.checkSpacing,
        CustomValidators.isDigitLetter
      ]),
      emails: new FormArray([], Validators.email)
    })
  }

  addEmail() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('emails')).push(control);
  }

  removeEmail(index) {
    (this.form.get('emails') as FormArray).removeAt(index);
  }

  //Logging "submit" in console so we can see the result of work
  submit() {
    console.log('Reactive form submitted: ', this.form);
  }
}