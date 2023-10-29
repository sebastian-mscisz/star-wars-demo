import { BrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import { render } from '@testing-library/react';

describe('Not Found Page', () => {
    it('should render', () => {
        const { asFragment } = render(<NotFoundPage />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
