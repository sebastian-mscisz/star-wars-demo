import { getCharactersEndpoint, Characters } from 'src/common';
import { DataApi } from 'src/xhr';
import { getDataFetchSlice } from '../utility';

export const { reducer: CharactersReducer, fetchData: fetchCharacters } = getDataFetchSlice<Characters>({
    dataName: 'characters',
    async fetchCallback() {
        return await DataApi.get(getCharactersEndpoint()).then((response) => response.data);
    },
});
