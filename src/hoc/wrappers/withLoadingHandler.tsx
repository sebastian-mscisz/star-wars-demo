import React from 'react';
import { Spinner } from '../../components/spinner';

export type withLoadingHandlerProps = {
    isLoading: boolean;
};

export const withLoadingHandler = <TProps extends object>(
    WrappedComponent: React.ComponentType<TProps>,
): React.FC<TProps & withLoadingHandlerProps> => {
    const Wrapper: React.FC<TProps & withLoadingHandlerProps> = ({ isLoading, ...props }: withLoadingHandlerProps) =>
        isLoading ? <Spinner /> : <WrappedComponent {...(props as TProps)} />;

    return Wrapper;
};
