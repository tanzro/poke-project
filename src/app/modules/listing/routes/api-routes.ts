import { environment } from "src/environments/environment";

export class ApiRoutes {

    static Listing = class {

        static getPokemonsList(offset: number, limit: number) {
            return `${environment.apiUrl}/?offset=${offset}&limit=${limit}`;
        }

        static getPokemonDetail(pokemon: number | string) {
            return `${environment.apiUrl}/pokemon/${pokemon}`;
        }

        static getPokemonDescription(pokemonId: number) {
            return `${environment.apiUrl}/characteristic/${pokemonId}`;
        }
    }
}