import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface ProductData {
  product1: string;
  product2: string;
  product3: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  products: ProductData = {
    product1: 'Laptop',
    product2: 'Mobile',
    product3: 'Television'
  };

  getProduct(productKey: keyof ProductData) {
    return this.products[productKey];
  }

  url='https://jsonplaceholder.typicode.com/users';
  users(): Observable<any> {
    return this.http.get(this.url);
  }
  // users() {
  //   return [
  //     { name: 'anil', age: 28, email: 'anil@gmail.com' },
  //     { name: 'sam', age: 30, email: 'sam@gmail.com' },
  //     { name: 'peter', age: 32, email: 'peter@gmail.com' }
  //   ]
  // }


}
