import { render } from '@testing-library/react';
import { withHandlers } from './withHandlers';
import { BrowserRouter } from 'react-router-dom';

describe('withHandlers', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    const TestComponent: React.FC = () => {
        return <div>Testing component</div>;
    };

    it('should render with wrapped component correctly', async () => {
        const TestComponentWithHandlers = withHandlers(TestComponent);

        const { asFragment } = render(<TestComponentWithHandlers isLoading={false} hasError={false} />, {
            wrapper: BrowserRouter,
        });

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render spinner when loading is on', async () => {
        const TestComponentWithHandlers = withHandlers(TestComponent);

        const { asFragment } = render(<TestComponentWithHandlers isLoading={true} hasError={false} />, {
            wrapper: BrowserRouter,
        });

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render error component when error is present', async () => {
        const TestComponentWithHandlers = withHandlers(TestComponent);

        const { asFragment } = render(<TestComponentWithHandlers isLoading={false} hasError={true} />, {
            wrapper: BrowserRouter,
        });

        expect(asFragment()).toMatchSnapshot();
    });
});
