import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-cards-coupons',
  templateUrl: './cards-coupons.component.html',
  styleUrls: ['./cards-coupons.component.css']
})
export class CardsCouponsComponent implements OnInit{
  @Input() category: string;
  @Input() description: string;
  @Input() img: string;
  @Input() date: string;

  constructor() {
    this.img ="No img found";
    this.date="No date found";
    this.category= "No description found";
    this.description = "No information found";
   }

  ngOnInit(): void {
  }
}
