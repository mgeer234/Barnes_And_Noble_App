import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAction, AngularFireDatabase } from "@angular/fire/compat/database";
import { ProductModel } from "src/app/book-cards-component/product_model";

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
 //   private baseUrl:string = "https://barnes-and-noble-app-default-rtdb.firebaseio.com/";
 //   private productsEndPoint:string = "products.json"; 

    constructor(private db:AngularFireDatabase){
        
    }

   getProducts(){
        return this.db.list<ProductModel>("products").valueChanges();
    }

    getProduct(index: number){
    } 
    addProduct(product:ProductModel){
        this.db.list<ProductModel>("products").push(product);
    } 
}