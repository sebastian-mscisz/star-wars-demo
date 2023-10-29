import React from 'react';
import { CharacterDetailsUi } from './ui/CharacterDetailsUi';
import { withHandlers } from 'src/hoc';
import { useCharacterDetails, useLocations, useSpecies, useVehicles } from 'src/hooks';

const CharacterDetailsWithHandlers = withHandlers(CharacterDetailsUi);

type CharacterDetailsProps = {
    characterId: string;
};

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ characterId }) => {
    const { data: character, isLoading, loadingError } = useCharacterDetails(characterId);
    const { data: locations, isLoading: isLoadingLocations, loadingError: loadingErrorLocations } = useLocations();
    const { data: vehicles, isLoading: isLoadingVehicles, loadingError: loadingErrorVehicles } = useVehicles();
    const { data: species, isLoading: isLoadingSpecies, loadingError: loadingErrorSpecies } = useSpecies();

    return (
        <CharacterDetailsWithHandlers
            isLoading={isLoading || isLoadingLocations || isLoadingSpecies || isLoadingVehicles}
            character={character}
            characterId={characterId}
            locations={locations}
            vehicles={vehicles}
            species={species}
            hasError={!!loadingError || !!loadingErrorLocations || !!loadingErrorSpecies || !!loadingErrorVehicles}
        />
    );
};
