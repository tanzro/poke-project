import { PokemonDescription } from './../../models/pokemon-description.model';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon-details';

@Component({
  selector: 'details-screen',
  templateUrl: './details-screen.component.html',
  styleUrls: ['./details-screen.component.scss']
})
export class DetailsScreenComponent implements OnInit {

  @Input() pokemonDetails: PokemonDetail | undefined; // Pokemon object return details

  constructor() { }

  ngOnInit(): void {

  }

}
