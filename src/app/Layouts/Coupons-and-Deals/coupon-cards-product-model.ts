export class ProductModelCoupons{
    category: string;
    description: string;
    img: string;
    date: string;

    constructor(category: string, description: string, img: string, date: string){
        this.category =category;
        this.img =img;
        this.description= description;
        this.date = date;
    }
}