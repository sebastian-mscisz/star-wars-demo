import { LocationDetails } from 'src/components';
import { useRequiredParams } from 'src/common';

export const LocationDetailsPage: React.FC = () => {
    const { locationId } = useRequiredParams<{ locationId: string }>();

    return <LocationDetails locationId={locationId} />;
};
