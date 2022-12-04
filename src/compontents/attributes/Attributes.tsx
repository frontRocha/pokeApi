export interface PersonCard {
    front_default: string;
    data: Data;
    type: Data;
    name: string;
}

export interface Data {
    name: string;
    sprites: PersonCard;
    types: PersonCard[];
}

export interface Person {
    id: string;
    name: string;
    height: number;
    weight: number;
    key: number;
    type: string;
    stats: any;
    sprites: ExtendPokemonInfo;
}

export interface ExtendPokemonInfo {
    back_default: string;
    front_default: string;
}


