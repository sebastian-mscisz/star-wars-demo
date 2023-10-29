import { render } from '@testing-library/react';
import { withLoadingHandler } from './withLoadingHandler';
import { BrowserRouter } from 'react-router-dom';

describe('withLoadingHandler', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    const TestComponent: React.FC = () => {
        return <div>Testing component</div>;
    };

    it('should render wrapped component when it is not loading', async () => {
        const TestComponentWithLoading = withLoadingHandler(TestComponent);

        const { asFragment } = render(<TestComponentWithLoading isLoading={false} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render spinner component when it is loading', async () => {
        const TestComponentWithLoading = withLoadingHandler(TestComponent);

        const { asFragment } = render(<TestComponentWithLoading isLoading={true} />, { wrapper: BrowserRouter });

        expect(asFragment()).toMatchSnapshot();
    });
});
