import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';
import { PokedexTopComponent } from './components/pokedex-top/pokedex-top.component';
import { ScreenPokemonComponent } from './components/screen-pokemon/screen-pokemon.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListingPageComponent,
    PokedexTopComponent,
    ScreenPokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    SharedModule
  ]
})
export class ListingModule { }
