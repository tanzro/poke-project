import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';
import { PokedexTopComponent } from './components/pokedex-top/pokedex-top.component';



@NgModule({
  declarations: [
    ListingPageComponent,
    PokedexTopComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
  ]
})
export class ListingModule { }
