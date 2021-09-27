import { Result } from "./../../models/pokemons-list.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styleUrls: ["./list-pokemon.component.scss"],
})
export class ListPokemonComponent implements OnInit {
  @Input() pokemonList: Result[] | undefined;
  @Output() onPokemonSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  pickPokemon(evento: any) {
    this.onPokemonSelected.emit(evento.value);
  }
}
