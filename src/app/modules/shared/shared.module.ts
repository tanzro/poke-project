import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { ButtonPokedexComponent } from './components/button-pokedex/button-pokedex.component';



@NgModule({
  declarations: [
    PrimaryButtonComponent,
    ButtonPokedexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryButtonComponent,
    ButtonPokedexComponent
  ]
})
export class SharedModule { }
