import { Component, OnInit, ViewChild } from '@angular/core';
import { FormModel } from './form-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  @ViewChild('modelForm') form: any;
  formModel: FormModel;
  modelForm: NgForm;

  constructor() {    
    this.formModel = new FormModel();
   }

  ngOnInit() {
  }

  onSubmitForm(formValue: any) {
    debugger;
    const formModel = this.form.value;
    const submitted = this.form.submitted;
    //this.formModel = this.form.value;
    console.log("formModel onSubmitForm ==>", this.formModel);
  }

  formModelEv(ev: FormModel){
    console.log("formModel Ev ===>", ev);
    this.formModel = ev;

  }
}
