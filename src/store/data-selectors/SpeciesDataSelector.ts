import { RootState } from '../rootReducer';
import { getDataSelector } from '../utility';

export const SpeciesDataSelector = getDataSelector((state: RootState) => state.species);
