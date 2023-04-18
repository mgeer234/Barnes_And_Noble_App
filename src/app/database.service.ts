import { Injectable } from "@angular/core";
import { AngularFireDatabase} from "@angular/fire/compat/database";
import { Observable} from "rxjs";
import { ProductModel } from "./book-cards-component/product_model";


@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<ProductModel []>
    constructor(private db:AngularFireDatabase){
           console.log("Setting up Firebase communication"); 
           this.items = this.db.list<ProductModel>('products').valueChanges();
    }

    public showData(){
        this.items.subscribe((data: ProductModel[])=>{
            console.log("Data received");
            for(let item of data){
                console.log(item);
            }
        })
    }
}