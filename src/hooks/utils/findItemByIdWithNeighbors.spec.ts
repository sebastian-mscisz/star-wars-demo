import { findItemByIdWithNeighbors } from './findItemByIdWithNeighbors';
import { TestCharacters } from '../../components/characters/test-data';
import { TestLocations } from '../../components/locations/test-data';
import { TestVehicles } from '../../components/vehicles/test-data';

describe('findItemByIdWithNeighbors', () => {
    test('should return Character Item with its neighbours', () => {
        const filter = findItemByIdWithNeighbors('https://swapi.info/api/people/2');

        const charactersWithNeighbours = filter(TestCharacters);

        expect(charactersWithNeighbours).toStrictEqual({
            ...TestCharacters[1],
            leftNeighbour: TestCharacters[0],
            rightNeighbour: TestCharacters[2],
        });
    });

    test('should return Location Item with its neighbours', () => {
        const filter = findItemByIdWithNeighbors('https://swapi.info/api/planets/4');

        const locationsWithNeighbours = filter(TestLocations);

        expect(locationsWithNeighbours).toStrictEqual({
            ...TestLocations[3],
            leftNeighbour: TestLocations[2],
            rightNeighbour: TestLocations[4],
        });
    });

    test('should return Vehicle Item with its neighbours', () => {
        const filter = findItemByIdWithNeighbors('https://swapi.info/api/vehicles/5');

        const vehiclesWithNeighbours = filter(TestVehicles);

        expect(vehiclesWithNeighbours).toStrictEqual({
            ...TestVehicles[4],
            leftNeighbour: TestVehicles[3],
            rightNeighbour: TestVehicles[0],
        });
    });

    test('should return undefined if no item is passed', () => {
        const filter = findItemByIdWithNeighbors('https://swapi.info/api/vehicles/5');

        const filteredItem = filter();

        expect(filteredItem).toBe(undefined);
    });

    test('should return undefined if no item is found', () => {
        const filter = findItemByIdWithNeighbors('https://swapi.info/api/vehicles/10');

        const vehiclesWithNeighbours = filter(TestVehicles);

        expect(vehiclesWithNeighbours).toBe(undefined);
    });
});
