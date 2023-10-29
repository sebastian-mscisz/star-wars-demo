import { Spinner } from './Spinner';
import { render } from '@testing-library/react';

describe('Spinner', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    it('should render', () => {
        const { asFragment } = render(<Spinner />);
        expect(asFragment()).toMatchSnapshot();
    });
});
