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

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MidNavBarComponent,
    BottomNavBarComponent,
    TopCarouselComponent,
    BookCardsComponentComponent,
    MultiItemCarouselComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
