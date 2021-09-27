import { PokemonDetail } from "./../models/pokemon-details";
import { ApiRoutes } from "./../routes/api-routes";
import { PokemonsList } from "./../models/pokemons-list.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PokemonDescription } from "../models/pokemon-description.model";

@Injectable({
  providedIn: "root",
})
export class PokemonListService {
  constructor(private http: HttpClient) {}

  getPokemonsList(limit: number): Observable<PokemonsList> {
    return this.http.get<PokemonsList>(
      ApiRoutes.Listing.getPokemonsList(limit)
    );
  }

  getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(
      ApiRoutes.Listing.getPokemonDetail(pokemon)
    );
  }

  getPokemonDescription(pokemonId: number): Observable<PokemonDescription> {
    return this.http.get<PokemonDescription>(
      ApiRoutes.Listing.getPokemonDescription(pokemonId)
    );
  }
}
