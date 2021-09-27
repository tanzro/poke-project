import { Result, PokemonsList } from './../../models/pokemons-list.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  @Input() pokemonList:Result[] | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
