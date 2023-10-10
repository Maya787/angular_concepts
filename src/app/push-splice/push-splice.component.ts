import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  name: string;
}
@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})


export class PushSpliceComponent {

  users: User[] = [];
  constructor(private router:Router){

  }
  onCreateUser(uname: any) {
    console.log(uname.value)
    this.users.push({
      name: uname.value
    });
    if(this.users.length>3){
      // alert('more than 3items');
      this.router.navigate(['products']);
    }
  }
  onRemoveUser() {
    this.users.splice(this.users.length - 1);
  }
  onRemoveItem(i: any) {
    this.users.splice(i, 1);
  }
}
