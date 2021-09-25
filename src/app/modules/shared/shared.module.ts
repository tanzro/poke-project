import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexTopComponent } from './components/pokedex-top/pokedex-top.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';



@NgModule({
  declarations: [
    PokedexTopComponent,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexTopComponent,
    PrimaryButtonComponent
  ]
})
export class SharedModule { }
