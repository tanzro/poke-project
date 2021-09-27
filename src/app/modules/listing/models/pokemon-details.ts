export interface PokemonDetail {
  id: number;
  order: number;
  name: string;
  height: number;
  abilities: Abilities[];
  spices: Species;
  types: Type[];
  stats: Stat[];
  sprites: Sprite;
}

export interface Abilities {
  ability: {
    name: string;
  };
}

export interface Species {
  url: string;
}

export interface Type {
  slot: number;
  type: {
    name: string;
  };
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Sprite {
    front_default: string;
}
