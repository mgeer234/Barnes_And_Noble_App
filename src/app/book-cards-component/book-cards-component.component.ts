import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-cards-component',
  templateUrl: './book-cards-component.component.html',
  styleUrls: ['./book-cards-component.component.css']
})
export class BookCardsComponentComponent implements OnInit{
  @Input() author: string;
  @Input() description: string;
  @Input() img: string;
  @Input() img2: string;

  constructor() {
    this.img ="No img found";
    this.img2 = "No img found";
    this.author= "No description found";
    this.description = "No information found";
   }

  ngOnInit(): void {
  }
}
