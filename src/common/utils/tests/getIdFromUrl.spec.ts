import { TestCharacters } from '../../../components/characters/test-data';
import { TestLocations } from '../../../components/locations/test-data';
import { TestVehicles } from '../../../components/vehicles/test-data';
import { getIdFromUrl } from '../getIdFromUrl';

describe('getIdFromUrl', () => {
    test('should return 4 from vehicle url', () => {
        expect(getIdFromUrl(TestVehicles[3].url)).toBe('4');
    });

    test('should return 5 from location url', () => {
        expect(getIdFromUrl(TestLocations[4].url)).toBe('5');
    });

    test('should return 3 from character url', () => {
        expect(getIdFromUrl(TestCharacters[2].url)).toBe('3');
    });

    test('should return 123 from custom url', () => {
        expect(getIdFromUrl('custom-url/with/id/123')).toBe('123');
    });
});
