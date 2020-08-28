import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // necesario para usar directivas ng en el template

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {

}
