import { ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { ErrorActionPayload } from 'src/common';
import { TDataState, AppThunk, InitialState } from './reduxTypes';
import { AxiosError } from 'axios';

type FetchDataType = () => AppThunk;

type ApiDataSlice<TState> = {
    reducer: Reducer<TState>;
    fetchData: FetchDataType;
};

type DataFetchParams<TDataObject> = {
    dataName: string;
    fetchCallback: () => Promise<TDataObject>;
};

export const getDataFetchSlice = <TDataObject>({
    dataName,
    fetchCallback,
}: DataFetchParams<TDataObject>): ApiDataSlice<TDataState<TDataObject>> => {
    const fetchSlice = createSlice({
        name: dataName,
        initialState: InitialState as TDataState<TDataObject>,
        reducers: {
            startFetching(state): void {
                state.loadingError = undefined;
                state.isLoading = true;
                state.hasReceivedResponse = false;
            },
            fetchDataSuccess(state, action: PayloadAction<TDataObject>): void {
                (state.data as TDataObject) = action.payload;
                state.loadingError = undefined;
                state.isLoading = false;
                state.hasReceivedResponse = true;
            },
            fetchDataFailure(state, action: PayloadAction<ErrorActionPayload>): void {
                state.data = undefined;
                state.loadingError = action.payload;
                state.isLoading = false;
                state.hasReceivedResponse = true;
            },
        },
    });

    const { fetchDataSuccess, fetchDataFailure, startFetching } = fetchSlice.actions;

    const fetchData =
        (): AppThunk =>
        async (dispatch): Promise<void> => {
            try {
                dispatch(startFetching());
                const data = (await fetchCallback()) as TDataObject;
                dispatch((fetchDataSuccess as ActionCreatorWithPayload<TDataObject>)(data));
            } catch (fetchError) {
                const error = {
                    status: (fetchError as AxiosError).response?.status,
                    cause: (fetchError as AxiosError).cause?.message,
                    message: (fetchError as AxiosError).message,
                };

                dispatch(
                    (fetchDataFailure as ActionCreatorWithPayload<ErrorActionPayload>)(error as ErrorActionPayload),
                );
            }
        };

    return {
        reducer: fetchSlice.reducer,
        fetchData,
    };
};
