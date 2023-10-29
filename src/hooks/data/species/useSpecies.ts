import { Species } from 'src/common';
import { TDataState, SpeciesDataSelector, fetchSpecies, useGetApiData } from 'src/store';

export const useSpecies = (): TDataState<Species> => {
    return useGetApiData(fetchSpecies, SpeciesDataSelector);
};
