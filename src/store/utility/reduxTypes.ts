import { ErrorActionPayload } from 'src/common';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

export type TDataState<TDataObject> = {
    isLoading: boolean;
    hasReceivedResponse: boolean;
    loadingError?: ErrorActionPayload;
    data?: TDataObject;
};

export const InitialState = {
    isLoading: false,
    hasReceivedResponse: false,
};

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, unknown, null, AnyAction>;
