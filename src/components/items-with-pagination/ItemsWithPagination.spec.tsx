import { BrowserRouter } from 'react-router-dom';
import { ItemsWithPagination } from './ItemsWithPagination';
import { render } from '@testing-library/react';
import { TestVehicles } from '../vehicles/test-data';
import { TestCharacters } from '../characters/test-data';
import { TestLocations } from '../locations/test-data';
import { charactersPagePath, locationsPagePath, vehiclesPagePath } from 'src/common';
import { VehiclesCard, LocationsCard, CharactersCard } from 'src/components';

describe('ItemsWithPagination', () => {
    it('should render with vehicles', () => {
        const { asFragment } = render(
            <ItemsWithPagination
                itemsPerPage={4}
                currentPageId={1}
                className="vehicles"
                CardComponent={VehiclesCard}
                items={TestVehicles}
                navPagePath={vehiclesPagePath()}
            />,
            { wrapper: BrowserRouter },
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render with characters', () => {
        const { asFragment } = render(
            <ItemsWithPagination
                itemsPerPage={4}
                currentPageId={1}
                className="characters"
                CardComponent={CharactersCard}
                items={TestCharacters}
                navPagePath={charactersPagePath()}
            />,
            { wrapper: BrowserRouter },
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render with locations', () => {
        const { asFragment } = render(
            <ItemsWithPagination
                itemsPerPage={4}
                currentPageId={1}
                className="locations"
                CardComponent={LocationsCard}
                items={TestLocations}
                navPagePath={locationsPagePath()}
            />,
            { wrapper: BrowserRouter },
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
