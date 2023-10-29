import { BrowserRouter } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { render } from '@testing-library/react';

describe('Navigation bar', () => {
    it('should render', () => {
        const { asFragment } = render(<NavigationBar />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
