import { Component } from '@angular/core';
import { UserdataService } from '../Services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users: any
  constructor(private _user: UserdataService) {
    console.log('userdata', _user.users());
    this._user.users().subscribe(data => this.users = data);
    // console.log(this.users);
  }
}
