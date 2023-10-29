import { useDispatch, useSelector } from 'react-redux';
import { TDataState } from './reduxTypes';
import { ExistingOutputSelector } from './getDataSelector';
import { SelectorArray } from 'reselect';
import { useEffect } from 'react';
import { AppDispatch } from '../store';

export const useGetApiData = <TAppThunk, TState extends SelectorArray, TDataObject>(
    fetchData: () => TAppThunk,
    existingDataSelector: ExistingOutputSelector<TState, TDataObject>,
): TDataState<TDataObject> => {
    const dispatch = useDispatch<AppDispatch>();

    const existingData = useSelector(existingDataSelector);

    useEffect(() => {
        if (
            !existingData.hasReceivedResponse &&
            !existingData.loadingError &&
            !existingData.data &&
            !existingData.isLoading
        ) {
            dispatch(fetchData());
        }
    }, [
        dispatch,
        fetchData,
        existingData.hasReceivedResponse,
        existingData.isLoading,
        existingData.loadingError,
        existingData.data,
    ]);

    return existingData;
};
