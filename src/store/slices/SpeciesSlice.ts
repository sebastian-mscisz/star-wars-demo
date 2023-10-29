import { getSpeciesEndpoint, Species } from 'src/common';
import { DataApi } from 'src/xhr';
import { getDataFetchSlice } from '../utility';

export const { reducer: SpeciesReducer, fetchData: fetchSpecies } = getDataFetchSlice<Species>({
    dataName: 'species',
    async fetchCallback() {
        return await DataApi.get(getSpeciesEndpoint()).then((response) => response.data);
    },
});
