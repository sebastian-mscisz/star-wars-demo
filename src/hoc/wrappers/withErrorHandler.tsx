import { ErrorComponent } from '../../components/error-component';

export type withErrorHandlerProps = {
    hasError: boolean;
};

export const withErrorHandler = <TProps extends object>(
    WrappedComponent: React.ComponentType<TProps>,
): React.FC<TProps & withErrorHandlerProps> => {
    const Wrapper: React.FC<TProps & withErrorHandlerProps> = ({ hasError, ...props }: withErrorHandlerProps) =>
        hasError ? (
            <ErrorComponent code="500" message={`No connection. Please try again later.`} />
        ) : (
            <WrappedComponent {...(props as TProps)} />
        );

    return Wrapper;
};
