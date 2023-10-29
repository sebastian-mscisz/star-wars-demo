import { useMemo } from 'react';
import { CharacterWithNeighbours } from 'src/common';
import { TDataState, CharactersDataSelector, fetchCharacters, useGetApiSingleData } from 'src/store';
import { findItemByIdWithNeighbors } from '../../utils';

export const useCharacterDetails = (characterId: string): TDataState<CharacterWithNeighbours | undefined> => {
    const characterFilter = useMemo(
        () => findItemByIdWithNeighbors('https://swapi.info/api/people/' + characterId),
        [characterId],
    );

    return useGetApiSingleData(fetchCharacters, CharactersDataSelector, characterFilter);
};
