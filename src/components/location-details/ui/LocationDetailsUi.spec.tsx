import { BrowserRouter } from 'react-router-dom';
import { LocationDetailsUi } from './LocationDetailsUi';
import { render } from '@testing-library/react';
import { TestCharacters } from '../../characters/test-data';
import { TestLocations } from '../../locations/test-data';

describe('LocationDetailsUi', () => {
    it('should render', () => {
        const { asFragment } = render(
            <LocationDetailsUi
                location={{ ...TestLocations[1], leftNeighbour: TestLocations[0], rightNeighbour: TestLocations[2] }}
                characters={TestCharacters}
                locationId={'3'}
            />,
            { wrapper: BrowserRouter },
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
