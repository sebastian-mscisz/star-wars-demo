import { BrowserRouter } from 'react-router-dom';
import { MasterPage } from './MasterPage';
import { render } from '@testing-library/react';

describe('Master Page', () => {
    it('should render', () => {
        const { asFragment } = render(
            <MasterPage>
                {' '}
                <p>test component</p>
            </MasterPage>,
            { wrapper: BrowserRouter },
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
