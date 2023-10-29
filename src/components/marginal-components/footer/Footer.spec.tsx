import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';
import { render } from '@testing-library/react';

describe('Footer', () => {
    it('should render', () => {
        const { asFragment } = render(<Footer />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
