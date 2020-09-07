import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})

export class TemplateFormComponent {
  @ViewChild('TemplForm') TemplForm: NgForm;


  //Logging "submit" in console so we can see the result of work
  onSubmit() {
    console.log('Template-driven form submitted: ', this.TemplForm)
  }
}
