import { Locations, locationsPagePath, sortAZ } from 'src/common';
import { LocationsCard, ItemsWithPagination } from 'src/components';
import './LocationsUi.scss';
import { useParams } from 'react-router-dom';

type LocationsUiProps = {
    locations?: Locations;
};

const itemsPerPage = 12;

export const LocationsUi: React.FC<LocationsUiProps> = ({ locations }) => {
    const pageId = useParams();
    const currentPageId = Number(Object.values(pageId)[0]) || 1;

    if (!locations) return null;

    const sortedLocations = [...locations].sort((a, b) => sortAZ(a.name || '', b.name || ''));

    return (
        <ItemsWithPagination
            items={sortedLocations}
            itemsPerPage={itemsPerPage}
            currentPageId={currentPageId}
            navPagePath={locationsPagePath()}
            className={'locations'}
            CardComponent={LocationsCard}
        />
    );
};
