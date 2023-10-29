import React from 'react';
import { VehicleDetailsUi } from './ui/VehicleDetailsUi';
import { withHandlers } from 'src/hoc';
import { useCharacters, useVehicleDetails } from 'src/hooks';

const VehicleDetailsWithHandlers = withHandlers(VehicleDetailsUi);

type VehicleDetailsProps = {
    vehicleId: string;
};

export const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicleId }) => {
    const { data, isLoading, loadingError } = useVehicleDetails(vehicleId);
    const { data: characters, isLoading: isLoadingCharacters, loadingError: loadingErrorCharacters } = useCharacters();

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
