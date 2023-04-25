import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layouts/Blog-and-Podcast/second-layout.component';
import { ThirdLayoutComponent } from './Layouts/Membership/third-layout.component';
import { FourthLayoutComponent } from './Layouts/Coupons-and-Deals/fourth-layout.component';
import { FifthLayoutComponent } from './Layouts/Bestsellers/fifth-layout.component';
import { SixthLayoutComponent } from './Layouts/Gift-cards/sixth-layout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [{
  path: '',
  component: HomeLayoutComponent
 },
 {
  path: 'blog-and-podcast',
 component: SecondLayoutComponent
},
{
  path: 'membership',
 component: ThirdLayoutComponent
},
{
  path: 'coupons-and-deals',
 component: FourthLayoutComponent
},
{
  path: 'bestsellers',
 component: FifthLayoutComponent
},
{
  path: 'giftcards',
component: SixthLayoutComponent
},
{
  path: 'admin',
component: AddProductComponent
},
{
  path:'auth',
  component: AuthComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
