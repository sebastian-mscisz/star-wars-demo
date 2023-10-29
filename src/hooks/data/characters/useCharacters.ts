import { Characters } from 'src/common';
import { TDataState, CharactersDataSelector, fetchCharacters, useGetApiData } from 'src/store';

export const useCharacters = (): TDataState<Characters> => {
    return useGetApiData(fetchCharacters, CharactersDataSelector);
};
