import { withHandlers } from 'src/hoc';
import { VehiclesUi } from './ui/VehiclesUi';
import { useVehicles } from 'src/hooks';

const VehiclesWithHandlers = withHandlers(VehiclesUi);

export const Vehicles: React.FC = () => {
    const { data: vehicles, isLoading, loadingError } = useVehicles();

    return <VehiclesWithHandlers isLoading={isLoading} vehicles={vehicles} hasError={!!loadingError} />;
};
