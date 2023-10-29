import { render } from '@testing-library/react';
import { withErrorHandler } from './withErrorHandler';
import { BrowserRouter } from 'react-router-dom';

describe('withErrorHandler', () => {
    const TestComponent: React.FC = () => {
        return <div>Testing component</div>;
    };

    it('should render wrapped component when no error', async () => {
        const TestComponentWithError = withErrorHandler(TestComponent);

        const { asFragment } = render(<TestComponentWithError hasError={false} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render error component when error is present', async () => {
        const TestComponentWithError = withErrorHandler(TestComponent);

        const { asFragment } = render(<TestComponentWithError hasError={true} />, { wrapper: BrowserRouter });

        expect(asFragment()).toMatchSnapshot();
    });
});
