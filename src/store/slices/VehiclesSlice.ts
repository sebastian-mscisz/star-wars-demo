import { getVehiclesEndpoint, Vehicles } from 'src/common';
import { DataApi } from 'src/xhr';
import { getDataFetchSlice } from '../utility';

export const { reducer: VehiclesReducer, fetchData: fetchVehicles } = getDataFetchSlice<Vehicles>({
    dataName: 'vehicles',
    async fetchCallback() {
        return await DataApi.get(getVehiclesEndpoint()).then((response) => response.data);
    },
});
