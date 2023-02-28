import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layouts/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './Layouts/third-layout/third-layout.component';
import { FourthLayoutComponent } from './Layouts/fourth-layout/fourth-layout.component';
import { FifthLayoutComponent } from './Layouts/fifth-layout/fifth-layout.component';
import { SixthLayoutComponent } from './Layouts/sixth-layout/sixth-layout.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
