import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  isActive: boolean = false;
  selectedProduct: string = '';
  onBtnClick() {
    this.isActive = true;
  }
  onSelectval(val: Event): void {
    console.log((val.target as HTMLInputElement).value);
    this.selectedProduct=(val.target as HTMLInputElement).value;
    // console.log(this.selectedProduct);
  }
}
