import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../book-cards-component/product_model';
import { ProductsService } from '../Layouts/home-layout/products.service';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  constructor(private ps:ProductsService){}

  ngOnInit(): void{

  }

  addItem(product:ProductModel){
    this.ps.addProduct(product)
  }


   
}
