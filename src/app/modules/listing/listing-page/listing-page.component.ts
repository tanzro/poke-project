import { Component, OnInit } from "@angular/core";
import { PokemonListService } from "../services/pokemon-list.service";

@Component({
  selector: "app-listing-page",
  templateUrl: "./listing-page.component.html",
  styleUrls: ["./listing-page.component.scss"],
})
export class ListingPageComponent implements OnInit {
  constructor(private pokemonListService: PokemonListService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getPokemonList(100, 200);
    this.getPokemonDetail('pikachu');
  }

  getPokemonList(offset: number, limit: number) {
    this.pokemonListService
      .getPokemonsList(offset, limit)
      .subscribe((x) => console.log(x));
  }

  getPokemonDetail(pokemon: number | string) {
    this.pokemonListService
      .getPokemonDetail(pokemon)
      .subscribe((x) => console.log(x));
  }
}
