import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // constructor() {
  //   const fruitsName = ['banana', 'orange', 'kiwi', 'apple'];
  //   console.log(fruitsName.indexOf('orange'));
  // }
  value: string = 'this is test value';
  namesearch: string = '';
  productArr = [
    {
      sno: 1,
      name: 'Mobile',
      price: 7000,
      availability: 'Available'
    },
    {
      sno: 2,
      name: 'Television',
      price: 20000,
      availability: 'Not Available'
    },
    {
      sno: 3,
      name: 'Laptop',
      price: 25000,
      availability: 'Available'
    },
    {
      sno: 4,
      name: 'Washing Mashine',
      price: 30000,
      availability: 'Not Available'
    },
    {
      sno: 5,
      name: 'Mobile(Samsung)',
      price: 7000,
      availability: 'Available'
    },
    {
      sno: 6,
      name: 'Television(Sansui)',
      price: 24000,
      availability: 'Available'
    },
    {
      sno: 7,
      name: 'Laptop(HP)',
      price: 54000,
      availability: 'Not Available'
    },
    {
      sno: 8,
      name: 'Mobile(Nokia)',
      price: 7000,
      availability: 'Not Available'
    },

  ]
}
