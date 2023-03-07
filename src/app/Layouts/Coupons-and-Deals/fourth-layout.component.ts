import { Component } from '@angular/core';
import { mock_list_coupons } from './coupon-cards-mock-list';
import { ProductModelCoupons } from './coupon-cards-product-model';

@Component({
  selector: 'app-fourth-layout',
  templateUrl: './fourth-layout.component.html',
  styleUrls: ['./fourth-layout.component.css']
})
export class FourthLayoutComponent {
  products: ProductModelCoupons [] = [];

  constructor() {
    for (var item of mock_list_coupons){
      console.log(item);
      this.products.push(item);
    }
   }

  ngOnInit(): void {
  }
}
