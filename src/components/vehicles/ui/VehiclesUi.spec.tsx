import { BrowserRouter } from 'react-router-dom';
import { VehiclesUi } from './VehiclesUi';
import { render } from '@testing-library/react';
import { TestVehicles } from '../test-data';

describe('VehiclesUi', () => {
    it('should render', () => {
        const { asFragment } = render(<VehiclesUi vehicles={TestVehicles} />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
