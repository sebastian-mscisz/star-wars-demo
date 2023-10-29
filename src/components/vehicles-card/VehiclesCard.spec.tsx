import { BrowserRouter } from 'react-router-dom';
import { VehiclesCard } from './VehiclesCard';
import { render } from '@testing-library/react';
import { TestVehicle } from '../vehicles/test-data';

describe('Vehicles card', () => {
    it('should render', () => {
        const { asFragment } = render(<VehiclesCard item={TestVehicle} />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
