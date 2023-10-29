import { useMemo } from 'react';
import { VehicleWithNeighbours } from 'src/common';
import { TDataState, VehiclesDataSelector, fetchVehicles, useGetApiSingleData } from 'src/store';
import { findItemByIdWithNeighbors } from '../../utils';

export const useVehicleDetails = (vehicleId: string): TDataState<VehicleWithNeighbours | undefined> => {
    const vehiclesFilter = useMemo(
        () => findItemByIdWithNeighbors('https://swapi.info/api/vehicles/' + vehicleId),
        [vehicleId],
    );

    return useGetApiSingleData(fetchVehicles, VehiclesDataSelector, vehiclesFilter);
};
