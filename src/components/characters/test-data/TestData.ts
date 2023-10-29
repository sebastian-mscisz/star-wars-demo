import { Characters, Character, Species } from 'src/common';

export const TestCharacter: Character = {
    name: 'Character1',
    url: 'https://swapi.info/api/people/1',
    homeworld: 'https://swapi.info/api/planets/1',
    species: ['species/1'],
    vehicles: ['https://swapi.info/api/vehicles/1'],
};

export const TestCharacters: Characters = [
    TestCharacter,
    {
        name: 'Character2',
        url: 'https://swapi.info/api/people/2',
        vehicles: ['https://swapi.info/api/vehicles/1', 'https://swapi.info/api/vehicles/2'],
        homeworld: 'https://swapi.info/api/planets/2',
        species: ['species/2'],
    },
    {
        name: 'Character3',
        url: 'https://swapi.info/api/people/3',
        vehicles: [],
        homeworld: 'https://swapi.info/api/planets/3',
        species: ['species/3'],
    },
    {
        name: 'Character4',
        url: 'https://swapi.info/api/people/4',
        vehicles: ['https://swapi.info/api/vehicles/3'],
        homeworld: 'https://swapi.info/api/planets/4',
        species: ['species/4'],
    },
    {
        name: 'Character5',
        url: 'https://swapi.info/api/people/5',
        vehicles: ['https://swapi.info/api/vehicles/4', 'https://swapi.info/api/vehicles/5'],
        homeworld: 'https://swapi.info/api/planets/4',
        species: ['species/5'],
    },
];

export const TestSpecies: Species = [
    {
        name: 'Species2',
        url: 'species/2',
    },
    {
        name: 'Species2',
        url: 'species/2',
    },
    {
        name: 'Species3',
        url: 'species/3',
    },
    {
        name: 'Species4',
        url: 'species/4',
    },
    {
        name: 'Species5',
        url: 'species/5',
    },
];
