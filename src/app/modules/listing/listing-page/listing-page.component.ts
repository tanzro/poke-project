import { PokemonsList, Result } from './../models/pokemons-list.model';
import { PokemonDescription } from "./../models/pokemon-description.model";
import { Component, OnInit } from "@angular/core";
import { PokemonDetail } from "../models/pokemon-details";
import { PokemonListService } from "../services/pokemon-list.service";

@Component({
  selector: "app-listing-page",
  templateUrl: "./listing-page.component.html",
  styleUrls: ["./listing-page.component.scss"],
})
export class ListingPageComponent implements OnInit {
  pokemonToSearch: string | number = ""; // Text typed by the user to search pokémon
  pokemonDetails: PokemonDetail | undefined; // Pokemon object return details
  pokemonDescription: PokemonDescription | undefined; // Pokemon object return description
  isLoading: boolean = false; // Makes the big blue ball blink when processing
  errorMessage: boolean = false; // Warns if it will show the error message or not when fetching pokemon
  pokemonList: Result[] | undefined; // List of pokemonsq

  constructor(private pokemonListService: PokemonListService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getPokemonList(1200);
  }

  // Only AlphaNumeric on input
  keyPressAlphaNumeric(event: { keyCode: number; preventDefault: () => void }) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  getPokemonList(limit: number) {
    this.pokemonListService
      .getPokemonsList(limit)
      .subscribe((x) => this.pokemonList = x.results);
  }

  getPokemonDetail(pokemon: number | string) {
    this.pokemonDetails = undefined;
    this.isLoading = true;
    this.errorMessage = false;
    this.pokemonListService.getPokemonDetail(pokemon).subscribe(
      (x) => {
        (this.pokemonDetails = x), (this.isLoading = false), console.log(x)
      },
      (err) => {
        (this.errorMessage = true), (this.isLoading = false);
      }
    );
  }

  recebeuPokemon(respostaFilho: string) {
    this.pokemonToSearch = '';
    this.getPokemonDetail(respostaFilho);
  }
}
