import { Component, EventEmitter, Input, Output } from '@angular/core';
interface User {
  name: string;
}
@Component({
  selector: 'app-childsecond',
  templateUrl: './childsecond.component.html',
  styleUrls: ['./childsecond.component.css']
})
export class ChildsecondComponent {

  @Input() placeholderText: string = 'create users';
  @Output() addedUser = new EventEmitter<any>();
  @Input() users: User[] = [];
  totalUser: boolean = false;

  onCreateUser(uname: any) {
    this.totalUser = true;
    console.log(uname.value);
    if (uname.value.length > 0) {
      this.users.push({
        name: uname.value
      });
    }

    console.log(this.users);
    this.addedUser.emit(this.users);
  }
}
