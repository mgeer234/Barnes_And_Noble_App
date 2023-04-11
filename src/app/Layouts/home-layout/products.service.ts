import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "src/app/book-cards-component/product_model";

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl:string = "https://barnes-and-noble-app-default-rtdb.firebaseio.com/";
    private productsEndPoint:string = "products.json"; 

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductModel[]>(this.baseUrl + this.productsEndPoint);
    }

    getProduct(index: number){
    }
}