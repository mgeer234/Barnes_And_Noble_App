export class ProductModel {
    img2: string;
    description: string;
    author: string;
    img: string;

    constructor(img2: string, author: string, description: string, img: string){
        this.author =author;
        this.img =img;
        this.description= description;
        this.img2 = img2;
    }
}