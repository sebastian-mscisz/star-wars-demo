import { RootState } from '../rootReducer';
import { getDataSelector } from '../utility';

export const LocationsDataSelector = getDataSelector((state: RootState) => state.locations);
