import { DataItemWithNeighbours } from './Common';

export type Vehicle = {
    name?: string;
    url?: string;
    vehicle_class?: string;
    pilots?: string[];
};

export type VehicleWithNeighbours = DataItemWithNeighbours<Vehicle>;

export type Vehicles = Vehicle[];
