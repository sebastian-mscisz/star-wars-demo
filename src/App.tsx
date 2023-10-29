import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
    CharacterDetailsPage,
    CharactersPage,
    LocationDetailsPage,
    LocationsPage,
    MasterPage,
    NotFoundPage,
    VehicleDetailsPage,
    VehiclesPage,
} from './pages';
import {
    charactersPagePath,
    landingPagePath,
    vehiclesPagePath,
    locationsPagePath,
    characterDetailsPagePath,
    locationDetailsPagePath,
    vehicleDetailsPagePath,
} from './common';
import { store } from './store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <MasterPage>
                    <Routes>
                        <Route path={landingPagePath()} element={<Navigate replace to={charactersPagePath()} />} />
                        <Route path={`${charactersPagePath()}/*`} element={<CharactersPage />} />
                        <Route path={`${vehiclesPagePath()}/*`} element={<VehiclesPage />} />
                        <Route path={`${locationsPagePath()}/*`} element={<LocationsPage />} />
                        <Route path={characterDetailsPagePath()} element={<CharacterDetailsPage />} />
                        <Route path={locationDetailsPagePath()} element={<LocationDetailsPage />} />
                        <Route path={vehicleDetailsPagePath()} element={<VehicleDetailsPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </MasterPage>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
