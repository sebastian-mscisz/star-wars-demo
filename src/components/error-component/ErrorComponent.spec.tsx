import { BrowserRouter } from 'react-router-dom';
import { ErrorComponent } from './ErrorComponent';
import { render } from '@testing-library/react';

describe('Error component', () => {
    it('should render', () => {
        const { asFragment } = render(<ErrorComponent code="404" message="Not found" />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
