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
import { SecondLayoutComponent } from './Layouts/second-layout/second-layout.component';
import { LargeBookCardComponent } from './large-book-card/large-book-card.component';
import { ThirdLayoutComponent } from './Layouts/third-layout/third-layout.component';
import { FourthLayoutComponent } from './Layouts/fourth-layout/fourth-layout.component';
import { FifthLayoutComponent } from './Layouts/fifth-layout/fifth-layout.component';
import { SixthLayoutComponent } from './Layouts/sixth-layout/sixth-layout.component';

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
    SixthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
