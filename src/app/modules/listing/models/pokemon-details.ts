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
  weight: number;
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

export interface DreamWorld {
    front_default: string;
    front_female?: any;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Other {
    dream_world: DreamWorld;
    official_artwork: OfficialArtwork;
}
export interface Sprite {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;
}
