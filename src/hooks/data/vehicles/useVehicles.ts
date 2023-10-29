import { Vehicles } from 'src/common';
import { TDataState, VehiclesDataSelector, fetchVehicles, useGetApiData } from 'src/store';

export const useVehicles = (): TDataState<Vehicles> => {
    return useGetApiData(fetchVehicles, VehiclesDataSelector);
};
