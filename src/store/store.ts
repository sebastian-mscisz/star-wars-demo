import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createStore = (): EnhancedStore<any, any> => {
    const store = configureStore({
        reducer: rootReducer,
    });

    return store;
};

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
