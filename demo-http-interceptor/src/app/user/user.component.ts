import { Component, OnInit } from '@angular/core';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userItem: Observable<any>;
  constructor(private _userService: UtilService) { }

  ngOnInit() {
  }

  getRequest() {
    console.log("get Request");
    return this._userService.getItem().subscribe(user => this.userItem = user);
    //this.userItem = this._userService.getItem();
  }

}
