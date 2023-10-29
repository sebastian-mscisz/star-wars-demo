import React from 'react';
import { LocationDetailsUi } from './ui/LocationDetailsUi';
import { withHandlers } from 'src/hoc';
import { useCharacters, useLocationDetails } from 'src/hooks';

const LocationDetailsWithHandlers = withHandlers(LocationDetailsUi);

type LocationDetailsProps = {
    locationId: string;
};

export const LocationDetails: React.FC<LocationDetailsProps> = ({ locationId }) => {
    const { data, isLoading, loadingError } = useLocationDetails(locationId);
    const { data: characters, isLoading: isLoadingCharacters, loadingError: loadingErrorCharacters } = useCharacters();

    return (
        <LocationDetailsWithHandlers
            isLoading={isLoading || isLoadingCharacters}
            location={data}
            locationId={locationId}
            characters={characters}
            hasError={!!loadingError || !!loadingErrorCharacters}
        />
    );
};
