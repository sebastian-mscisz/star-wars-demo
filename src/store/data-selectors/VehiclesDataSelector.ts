import { RootState } from '../rootReducer';
import { getDataSelector } from '../utility';

export const VehiclesDataSelector = getDataSelector((state: RootState) => state.vehicles);
