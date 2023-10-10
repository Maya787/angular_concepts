import { Component } from '@angular/core';
interface User {
  name: string;
}
@Component({
  selector: 'app-parentsecond',
  templateUrl: './parentsecond.component.html',
  styleUrls: ['./parentsecond.component.css']
})
export class ParentsecondComponent {

  createuser: string = 'create user from parent component';
  users: User[] = [];
  onAddUser(e: any) {
    this.users = e;
  }
  onRemoveItem(i: any) {
    this.users.splice(i, 1);
  }
}
