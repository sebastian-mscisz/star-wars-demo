import React, { useEffect } from 'react';
import { VehicleDetailsUi } from './ui/VehicleDetailsUi';
import { withHandlers } from 'src/hoc';
import { useCharacters, useVehicleDetails } from 'src/hooks';
import { useNavigate } from 'react-router';
import { notFoundPagePath } from 'src/common';

const VehicleDetailsWithHandlers = withHandlers(VehicleDetailsUi);

type VehicleDetailsProps = {
    vehicleId: string;
};

export const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicleId }) => {
    const navigate = useNavigate();
    const { data, isLoading, loadingError, hasReceivedResponse } = useVehicleDetails(vehicleId);
    const { data: characters, isLoading: isLoadingCharacters, loadingError: loadingErrorCharacters } = useCharacters();

    useEffect(() => {
        if (hasReceivedResponse && data === undefined) navigate(notFoundPagePath());
    }, [hasReceivedResponse, data, navigate]);

    return (
        <VehicleDetailsWithHandlers
            isLoading={isLoading || isLoadingCharacters}
            vehicleId={vehicleId}
            vehicle={data}
            characters={characters}
            hasError={!!loadingError || !!loadingErrorCharacters}
        />
    );
};
