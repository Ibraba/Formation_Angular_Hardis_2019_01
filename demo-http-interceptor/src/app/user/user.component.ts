import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';
import { FormModel } from '../form-model/form-model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],  
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class UserComponent implements OnInit {

  @Input()
  formUser: FormModel;
  @Input()
  submitted: boolean;
  @Output() formUserEv = new EventEmitter<FormModel>();
  userItem: Observable<any>;
  constructor(private _userService: UtilService) { 
    this.formUser = new FormModel();
  }

  ngOnInit() {
  }

  formUserUpdate(){
    this.formUser.userName = 'User name in user';
    console.log("formUser/userName ==>", this.formUser.userName);
    this.formUserEv.emit(this.formUser);
  }

  getRequest() {
    console.log("get Request");
    debugger;
    this.formUserUpdate();
    return this._userService.getItem().subscribe(user => this.userItem = user);
    //this.userItem = this._userService.getItem();
  }

}
