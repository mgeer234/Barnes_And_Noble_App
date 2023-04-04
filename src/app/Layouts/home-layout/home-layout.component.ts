import { Component, OnInit } from '@angular/core';
import { mock_list } from 'src/app/book-cards-component/mock_list';
import { ProductModel } from 'src/app/book-cards-component/product_model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{
  products: ProductModel [] = [];

  constructor(private productsService:ProductsService){
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductModel[]) => {
        console.log("Fetching products");
        for(var product of data){
          console.log(product);
          this.products.push(product);
        }
        
    });
  }
}
