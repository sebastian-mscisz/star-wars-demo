import { DataItemWithNeighbours } from './Common';

export type Location = {
    name?: string;
    url?: string;
    residents?: string[];
    population?: string;
};

export type LocationWithNeighbours = DataItemWithNeighbours<Location>;

export type Locations = Location[];
