import { Spinner } from './Spinner';
import { render } from '@testing-library/react';

describe('Spinner', () => {

    it('should render', () => {
        const { asFragment } = render(<Spinner />);
        expect(asFragment()).toMatchSnapshot();
    });
});
