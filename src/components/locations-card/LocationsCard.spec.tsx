import { BrowserRouter } from 'react-router-dom';
import { LocationsCard } from './LocationsCard';
import { render } from '@testing-library/react';
import { TestLocation } from '../locations/test-data';

describe('Locations card', () => {
    it('should render', () => {
        const { asFragment } = render(<LocationsCard item={TestLocation} />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
