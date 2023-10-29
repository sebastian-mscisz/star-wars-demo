export const landingPagePath = (): string => {
    return '/';
};

export const charactersPagePath = (): string => {
    return '/characters';
};

export const characterDetailsPagePath = (characterId = ':characterId'): string => {
    return `/character/${characterId}`;
};

export const vehiclesPagePath = (): string => {
    return '/vehicles';
};

export const vehicleDetailsPagePath = (vehicleId = ':vehicleId'): string => {
    return `/vehicle/${vehicleId}`;
};
export const locationsPagePath = (): string => {
    return '/locations';
};

export const locationDetailsPagePath = (locationId = ':locationId'): string => {
    return `/location/${locationId}`;
};

export const notFoundPagePath = (): string => {
    return '/not-found';
};
