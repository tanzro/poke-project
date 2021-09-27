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
  isLoading: boolean = false; // Makes the big blue ball blink when processing
  errorMessage: boolean = false; 

  constructor(private pokemonListService: PokemonListService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getPokemonList(100, 200);
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

  getPokemonList(offset: number, limit: number) {
    this.pokemonListService
      .getPokemonsList(offset, limit)
      .subscribe((x) => console.log(""));
  }

  getPokemonDetail(pokemon: number | string) {
    this.isLoading = true;
    this.errorMessage = false;
    this.pokemonListService.getPokemonDetail(pokemon).subscribe((x) => {
      (this.pokemonDetails = x), (this.isLoading = false);
    }, (err) => this.errorMessage = true);
  }
}
