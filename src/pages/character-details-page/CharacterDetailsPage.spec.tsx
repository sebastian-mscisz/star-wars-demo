import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetailsPage } from './CharacterDetailsPage';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import {
    characterDetailsPagePath,
    getCharactersEndpoint,
    getLocationsEndpoint,
    getSpeciesEndpoint,
    getVehiclesEndpoint,
} from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestCharacters, TestSpecies } from 'src/components/characters/test-data';
import { TestVehicles } from 'src/components/vehicles/test-data';
import { TestLocations } from 'src/components/locations/test-data';

describe('CharacterDetailsPage', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);
        dataApiMock.onGet(getSpeciesEndpoint()).reply(200, TestSpecies);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <MemoryRouter initialEntries={[`${characterDetailsPagePath('4')}`]}>
                    <Routes>
                        <Route path="/character/:characterId" element={<CharacterDetailsPage />} />
                    </Routes>
                </MemoryRouter>
            </Provider>,
        );

        await screen.findByText('Character4');

        expect(asFragment()).toMatchSnapshot();
    });
});
