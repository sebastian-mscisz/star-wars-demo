import { createSelector, OutputSelector } from '@reduxjs/toolkit';
import { SelectorArray } from 'reselect';
import { TDataState } from './reduxTypes';

export type ExistingOutputSelector<TState extends SelectorArray, TDataObject> = OutputSelector<
    TState,
    TDataState<TDataObject>,
    (res: TDataState<TDataObject>) => TDataState<TDataObject>
>;

export const getDataSelector = <TState, TDataObject>(
    existingDataSelector: (state: TState) => TDataState<TDataObject>,
) => {
    return createSelector(existingDataSelector, (existingData) => existingData);
};
