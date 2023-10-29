import { Vehicles, Vehicle } from 'src/common';

export const TestVehicle: Vehicle = {
    name: 'Vehicle1',
    url: 'https://swapi.info/api/vehicles/1',
    vehicle_class: 'Air speeder',
    pilots: ['character/1', 'character/2'],
};

export const TestVehicles: Vehicles = [
    TestVehicle,
    {
        name: 'Vehicle2',
        url: 'https://swapi.info/api/vehicles/2',
        pilots: ['character/2'],
        vehicle_class: 'Land speeder',
    },
    {
        name: 'Vehicle3',
        url: 'https://swapi.info/api/vehicles/3',
        pilots: ['character/4'],
        vehicle_class: 'Water speeder',
    },
    {
        name: 'Vehicle4',
        url: 'https://swapi.info/api/vehicles/4',
        pilots: ['character/5'],
        vehicle_class: 'Fire speeder',
    },
    {
        name: 'Vehicle5',
        url: 'https://swapi.info/api/vehicles/5',
        pilots: ['character/5'],
        vehicle_class: 'Air speeder',
    },
];
