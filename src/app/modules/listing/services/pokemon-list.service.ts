import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor(private http: HttpClient) { }

  getPokemonsList(1)
}
