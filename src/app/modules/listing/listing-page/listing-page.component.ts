import { Component, OnInit } from "@angular/core";
import { PokemonDetail } from "../models/pokemon-details";
import { PokemonListService } from "../services/pokemon-list.service";

@Component({
  selector: "app-listing-page",
  templateUrl: "./listing-page.component.html",
  styleUrls: ["./listing-page.component.scss"],
})
export class ListingPageComponent implements OnInit {
  pokemonToSearch: string | number = ""; // Text typed by the user
  pokemonDetails!: PokemonDetail; // Pokemon object return details
 // Pokemon object return details

  constructor(private pokemonListService: PokemonListService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getPokemonList(100, 200);
  }

  getPokemonList(offset: number, limit: number) {
    this.pokemonListService
      .getPokemonsList(offset, limit)
      .subscribe((x) => console.log(''));
  }

  getPokemonDetail(pokemon: number | string) {
    this.pokemonListService
      .getPokemonDetail(pokemon)
      .subscribe((x) => (this.pokemonDetails = x));
  }
}
