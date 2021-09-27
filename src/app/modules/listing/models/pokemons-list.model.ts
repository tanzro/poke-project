export interface Result {
    name: string;
    url: string;
}

export interface PokemonsList {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}