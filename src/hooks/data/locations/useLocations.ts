import { Locations } from 'src/common';
import { TDataState, LocationsDataSelector, fetchLocations, useGetApiData } from 'src/store';

export const useLocations = (): TDataState<Locations> => {
    return useGetApiData(fetchLocations, LocationsDataSelector);
};
