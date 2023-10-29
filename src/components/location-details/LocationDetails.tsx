import React, { useEffect } from 'react';
import { LocationDetailsUi } from './ui/LocationDetailsUi';
import { withHandlers } from 'src/hoc';
import { useCharacters, useLocationDetails } from 'src/hooks';
import { useNavigate } from 'react-router';
import { notFoundPagePath } from 'src/common';

const LocationDetailsWithHandlers = withHandlers(LocationDetailsUi);

type LocationDetailsProps = {
    locationId: string;
};

export const LocationDetails: React.FC<LocationDetailsProps> = ({ locationId }) => {
    const navigate = useNavigate();
    const { data, isLoading, loadingError, hasReceivedResponse } = useLocationDetails(locationId);
    const { data: characters, isLoading: isLoadingCharacters, loadingError: loadingErrorCharacters } = useCharacters();

    useEffect(() => {
        if (hasReceivedResponse && data === undefined) navigate(notFoundPagePath());
    }, [hasReceivedResponse, data, navigate]);

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
