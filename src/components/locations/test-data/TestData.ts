import { Locations, Location } from 'src/common';

export const TestLocation: Location = {
    name: 'Location1',
    url: 'https://swapi.info/api/planets/1',
    residents: ['https://swapi.info/api/people/1'],
    population: '1000',
};

export const TestLocations: Locations = [
    TestLocation,
    {
        name: 'Location2',
        url: 'https://swapi.info/api/planets/2',
        residents: ['https://swapi.info/api/people/2'],
        population: '5343',
    },
    {
        name: 'Location3',
        url: 'https://swapi.info/api/planets/3',
        residents: ['https://swapi.info/api/people/3'],
        population: '13333',
    },
    {
        name: 'Location4',
        url: 'https://swapi.info/api/planets/4',
        residents: ['https://swapi.info/api/people/4', 'https://swapi.info/api/people/5'],
        population: '9999',
    },
    {
        name: 'Location5',
        url: 'https://swapi.info/api/planets/5',
        residents: [],
        population: '999',
    },
];
