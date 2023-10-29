import { AnyAction, combineReducers, createAction } from '@reduxjs/toolkit';
import { CharactersReducer, LocationsReducer, SpeciesReducer, VehiclesReducer } from './slices';

const appReducer = combineReducers({
    characters: CharactersReducer,
    vehicles: VehiclesReducer,
    locations: LocationsReducer,
    species: SpeciesReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export const resetStore = createAction('store/reset');

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
    if (action.type === resetStore.toString()) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
