import { VehicleDetails } from 'src/components';
import { useRequiredParams } from 'src/common';

export const VehicleDetailsPage: React.FC = () => {
    const { vehicleId } = useRequiredParams<{ vehicleId: string }>();

    return <VehicleDetails vehicleId={vehicleId} />;
};
