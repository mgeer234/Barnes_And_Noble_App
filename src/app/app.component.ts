import { Component, inject } from '@angular/core';
import { ProductModel } from './book-cards-component/product_model';
import { mock_list } from './book-cards-component/mock_list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-sink';
  products: ProductModel [] = [];


  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
  
}
