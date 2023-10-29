import { withLoadingHandler, withLoadingHandlerProps } from './withLoadingHandler';
import { withErrorHandler, withErrorHandlerProps } from './withErrorHandler';

type withHandlersProps<TProps> = TProps & withLoadingHandlerProps & withErrorHandlerProps;

export const withHandlers = <TProps extends object>(
    WrappedComponent: React.ComponentType<TProps>,
): React.FC<withHandlersProps<TProps>> => {
    const ComponentWithHocs = withLoadingHandler(withErrorHandler(WrappedComponent));

    const Wrapper = (props: withHandlersProps<TProps>) => {
        return <ComponentWithHocs {...props} />;
    };

    return Wrapper;
};
