import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'name-pokemon',
  templateUrl: './name-pokemon.component.html',
  styleUrls: ['./name-pokemon.component.scss']
})
export class NamePokemonComponent implements OnInit {

  @Input() pokemonName: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
