import { Component } from '@angular/core';
import { mock_list } from 'src/app/book-cards-component/mock_list';
import { ProductModel } from 'src/app/book-cards-component/product_model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}
