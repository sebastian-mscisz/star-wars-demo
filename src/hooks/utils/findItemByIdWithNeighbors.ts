import {
    Character,
    CharacterWithNeighbours,
    Location,
    LocationWithNeighbours,
    Vehicle,
    VehicleWithNeighbours,
    sortAZ,
} from 'src/common';

type InputItemTypes = Vehicle | Character | Location;
type OutputItemTypes = VehicleWithNeighbours | CharacterWithNeighbours | LocationWithNeighbours;

type ItemFilter = (items?: InputItemTypes[]) => OutputItemTypes | undefined;

export const findItemByIdWithNeighbors = (itemUrl: string): ItemFilter => {
    return (items) => {
        if (!items) return undefined;

        const sortedItemsAZ = [...items].sort((a, b) => sortAZ(a.name || '', b.name || ''));

        const foundItem = sortedItemsAZ.find((item) => item.url === itemUrl);

        if (!foundItem) return undefined;

        const foundItemIndex = sortedItemsAZ.indexOf(foundItem);
        const leftNeighbour =
            foundItemIndex > 0 ? sortedItemsAZ[foundItemIndex - 1] : sortedItemsAZ[sortedItemsAZ.length - 1];
        const rightNeighbour =
            foundItemIndex < sortedItemsAZ.length - 1 ? sortedItemsAZ[foundItemIndex + 1] : sortedItemsAZ[0];

        return { ...foundItem, leftNeighbour, rightNeighbour };
    };
};
