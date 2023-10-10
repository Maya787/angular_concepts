import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componentlifecyclehook',
  templateUrl: './componentlifecyclehook.component.html',
  styleUrls: ['./componentlifecyclehook.component.css']
})
export class ComponentlifecyclehookComponent {

  myval: string = '';
  onButtonClick(vals: any) {
    this.myval = vals.value;
    // console.log(vals.value);
  }

}
