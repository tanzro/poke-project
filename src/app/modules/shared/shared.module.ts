import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexTopComponent } from './components/pokedex-top/pokedex-top.component';



@NgModule({
  declarations: [
    PokedexTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexTopComponent
  ]
})
export class SharedModule { }
