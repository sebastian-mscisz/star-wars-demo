import { getLocationsEndpoint, Locations } from 'src/common';
import { DataApi } from 'src/xhr';
import { getDataFetchSlice } from '../utility';

export const { reducer: LocationsReducer, fetchData: fetchLocations } = getDataFetchSlice<Locations>({
    dataName: 'locations',
    async fetchCallback() {
        return await DataApi.get(getLocationsEndpoint()).then((response) => response.data);
    },
});
