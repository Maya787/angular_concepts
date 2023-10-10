import { Component } from '@angular/core';
import { UserdataService } from '../Services/userdata.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private _proddata: UserdataService) {
    console.log(_proddata);
  }
  proSelected: boolean = false;
  selProduct: string = '';
  addedProduct: any;


  onSelectProduct(productKey: keyof UserdataService['products']) {
    console.log(this._proddata.products[productKey]);
    this.proSelected = true;
    this.selProduct = this._proddata.products[productKey];
  }
  onAddProduct(prodata: any) {
    this.addedProduct = prodata;
  }
}
