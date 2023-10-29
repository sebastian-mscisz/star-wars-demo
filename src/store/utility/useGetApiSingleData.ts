import { useMemo } from 'react';
import { useGetApiData } from './useGetApiData';
import { TDataState } from './reduxTypes';
import { ExistingOutputSelector } from './getDataSelector';
import { SelectorArray } from 'reselect';

export const useGetApiSingleData = <TAppThunk, TState extends SelectorArray, TDataObject, TFilteredDataObject>(
    fetchData: () => TAppThunk,
    existingDataSelector: ExistingOutputSelector<TState, TDataObject>,
    dataFilter: (data?: TDataObject) => TFilteredDataObject,
): TDataState<TFilteredDataObject> => {
    const existingData = useGetApiData(fetchData, existingDataSelector);

    return useMemo(() => ({ ...existingData, data: dataFilter(existingData.data) }), [dataFilter, existingData]);
};
