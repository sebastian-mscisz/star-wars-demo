import { Vehicles, sortAZ, vehiclesPagePath } from 'src/common';
import { VehiclesCard, ItemsWithPagination } from 'src/components';
import './VehiclesUi.scss';
import { useParams } from 'react-router-dom';

type VehiclesUiProps = {
    vehicles?: Vehicles;
};

const itemsPerPage = 16;

export const VehiclesUi: React.FC<VehiclesUiProps> = ({ vehicles }) => {
    const pageId = useParams();
    const currentPageId = Number(Object.values(pageId)[0]) || 1;

    if (!vehicles) return null;

    const sortedVehicles = [...vehicles].sort((a, b) => sortAZ(a.name || '', b.name || ''));

    return (
        <ItemsWithPagination
            items={sortedVehicles}
            itemsPerPage={itemsPerPage}
            currentPageId={currentPageId}
            navPagePath={vehiclesPagePath()}
            className={'vehicles'}
            CardComponent={VehiclesCard}
        />
    );
};
