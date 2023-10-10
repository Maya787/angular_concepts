import { Component } from '@angular/core';
import { UserdataService } from './Services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'lazy-loading-concept';
  title = 'Services in Angular';
  users: any
  constructor(private _user: UserdataService) {
    // console.log(_user);
    // console.log('userdata', _user.users());
    // this.users = _user.users();
    // console.log(this.users);
  }
  onCreateUser(username: any) {
    console.log(username.value);
  }

}
