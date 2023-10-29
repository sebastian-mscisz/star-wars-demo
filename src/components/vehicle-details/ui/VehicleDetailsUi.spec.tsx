import { BrowserRouter } from 'react-router-dom';
import { VehicleDetailsUi } from './VehicleDetailsUi';
import { render } from '@testing-library/react';
import { TestCharacters } from '../../characters/test-data';
import { TestVehicles } from '../../vehicles/test-data';

describe('VehicleDetailsUi', () => {
    it('should render', () => {
        const { asFragment } = render(
            <VehicleDetailsUi
                vehicle={{ ...TestVehicles[1], leftNeighbour: TestVehicles[0], rightNeighbour: TestVehicles[2] }}
                characters={TestCharacters}
                vehicleId={'3'}
            />,
            { wrapper: BrowserRouter },
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
