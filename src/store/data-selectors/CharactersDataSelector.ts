import { RootState } from '../rootReducer';
import { getDataSelector } from '../utility';

export const CharactersDataSelector = getDataSelector((state: RootState) => state.characters);
