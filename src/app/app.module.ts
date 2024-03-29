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
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './Navigation/user-info/user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth/auth.component';

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
    FootbarBestsellersComponent,
    UserInfoComponent,
    AddProductComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'barnes-and-noble-app'),
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideDatabase(()=> getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
