import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { MidNavBarComponent } from './Navigation/mid-nav-bar/mid-nav-bar.component';
import { BottomNavBarComponent } from './Navigation/bottom-nav-bar/bottom-nav-bar.component';
import { TopCarouselComponent } from './Carousel/top-carousel/top-carousel.component';
import { BookCardsComponentComponent } from './book-cards-component/book-cards-component.component';
import { MultiItemCarouselComponentComponent } from './multi-item-carousel-component/multi-item-carousel-component.component';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layouts/Blog-and-Podcast/second-layout.component';
import { LargeBookCardComponent } from './large-book-card/large-book-card.component';
import { ThirdLayoutComponent } from './Layouts/Membership/third-layout.component';
import { FourthLayoutComponent } from './Layouts/Coupons-and-Deals/fourth-layout.component';
import { FifthLayoutComponent } from './Layouts/Bestsellers/fifth-layout.component';
import { SixthLayoutComponent } from './Layouts/Gift-cards/sixth-layout.component';
import { BooksCarouselComponent } from './Layouts/Coupons-and-Deals/books-carousel/books-carousel.component';
import { CardsCouponsComponent } from './Layouts/Coupons-and-Deals/cards-coupons/cards-coupons.component';
import { FooterCouponsComponent } from './Layouts/Coupons-and-Deals/footer-coupons/footer-coupons.component';
import { CarouselBestsellersComponent } from './Layouts/Bestsellers/carousel-bestsellers/carousel-bestsellers/carousel-bestsellers.component';
import { SidebarBestsellersComponent } from './Layouts/Bestsellers/sidebar-bestsellers/sidebar-bestsellers/sidebar-bestsellers.component';
import { FootbarBestsellersComponent } from './Layouts/Bestsellers/footbar-bestsellers/footbar-bestsellers/footbar-bestsellers.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MidNavBarComponent,
    BottomNavBarComponent,
    TopCarouselComponent,
    BookCardsComponentComponent,
    MultiItemCarouselComponentComponent,
    HomeLayoutComponent,
    SecondLayoutComponent,
    LargeBookCardComponent,
    ThirdLayoutComponent,
    FourthLayoutComponent,
    FifthLayoutComponent,
    SixthLayoutComponent,
    BooksCarouselComponent,
    CardsCouponsComponent,
    FooterCouponsComponent,
    CarouselBestsellersComponent,
    SidebarBestsellersComponent,
    FootbarBestsellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
