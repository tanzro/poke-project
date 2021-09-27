import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';
import { PokedexTopComponent } from './components/pokedex-top/pokedex-top.component';
import { ScreenPokemonComponent } from './components/screen-pokemon/screen-pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';



@NgModule({
  declarations: [
    ListingPageComponent,
    PokedexTopComponent,
    ScreenPokemonComponent,
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    SharedModule
  ]
})
export class ListingModule { }
