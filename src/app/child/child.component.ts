import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() productSelected: boolean = false;
  @Input() selectedProduct: string = '';
  @Output() addedProduct = new EventEmitter<any>();


  onAddToCart() {
    this.addedProduct.emit(this.selectedProduct);
  }
}
