import { withHandlers } from 'src/hoc';
import { LocationsUi } from './ui/LocationsUi';
import { useLocations } from 'src/hooks';

const LocationsWithHandlers = withHandlers(LocationsUi);

export const Locations: React.FC = () => {
    const { data: locations, isLoading, loadingError } = useLocations();

    return <LocationsWithHandlers isLoading={isLoading} locations={locations} hasError={!!loadingError} />;
};
