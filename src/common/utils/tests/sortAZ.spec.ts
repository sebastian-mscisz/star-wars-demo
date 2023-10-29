import { sortAZ } from '../sortAZ';

const randomStrings = [
    'WMZeeYIqGu',
    'ZuzJpgVnVE',
    'yrhbdnGtVV',
    'ikoMfFLfYJ',
    'tNaIFbaCSP',
    'EYnJtGdfLM',
    'HdvvdMWgFx',
    'UwWzMdDWru',
    'JWCDqKVbsr',
    'ESuVnUewsy',
];

const sortedStrings = [
    'ESuVnUewsy',
    'EYnJtGdfLM',
    'HdvvdMWgFx',
    'JWCDqKVbsr',
    'UwWzMdDWru',
    'WMZeeYIqGu',
    'ZuzJpgVnVE',
    'ikoMfFLfYJ',
    'tNaIFbaCSP',
    'yrhbdnGtVV',
];

describe('sortAZ', () => {
    test('should return sorted strings', () => {
        expect(randomStrings.sort((a, b) => sortAZ(a, b))).toStrictEqual(sortedStrings);
    });
});
