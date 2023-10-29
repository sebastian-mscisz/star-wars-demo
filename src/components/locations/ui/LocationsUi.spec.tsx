import { BrowserRouter } from 'react-router-dom';
import { LocationsUi } from './LocationsUi';
import { render } from '@testing-library/react';
import { TestLocations } from '../test-data';

describe('LocationsUi', () => {
    it('should render', () => {
        const { asFragment } = render(<LocationsUi locations={TestLocations} />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
