import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import { render } from '@testing-library/react';

describe('Header', () => {
    it('should render', () => {
        const { asFragment } = render(<Header />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
