import { DataItemWithNeighbours } from './Common';

export type Character = {
    name?: string;
    homeworld?: string;
    species?: string[];
    vehicles?: string[];
    url?: string;
};

export type CharacterWithNeighbours = DataItemWithNeighbours<Character>;

export type Characters = Character[];
