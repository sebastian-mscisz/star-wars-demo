import { useMemo } from 'react';
import { LocationWithNeighbours } from 'src/common';
import { TDataState, LocationsDataSelector, fetchLocations, useGetApiSingleData } from 'src/store';
import { findItemByIdWithNeighbors } from '../../utils';

export const useLocationDetails = (locationId: string): TDataState<LocationWithNeighbours | undefined> => {
    const locationsFilter = useMemo(
        () => findItemByIdWithNeighbors('https://swapi.info/api/planets/' + locationId),
        [locationId],
    );

    return useGetApiSingleData(fetchLocations, LocationsDataSelector, locationsFilter);
};
