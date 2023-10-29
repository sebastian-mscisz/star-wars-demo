import { BrowserRouter } from 'react-router-dom';
import { CharacterDetails } from './CharacterDetails';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getCharactersEndpoint, getLocationsEndpoint, getSpeciesEndpoint, getVehiclesEndpoint } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestCharacters, TestSpecies } from '../characters/test-data';
import { TestVehicles } from '../vehicles/test-data';
import { TestLocations } from '../locations/test-data';

describe('CharacterDetails', () => {
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
                <CharacterDetails characterId="1" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Character1');

        expect(asFragment()).toMatchSnapshot();
    });

    it('should error component on characters error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(500);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);
        dataApiMock.onGet(getSpeciesEndpoint()).reply(200, TestSpecies);

        render(
            <Provider store={createStore()}>
                <CharacterDetails characterId="2" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });

    it('should error component on vehicles error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(500);
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);
        dataApiMock.onGet(getSpeciesEndpoint()).reply(200, TestSpecies);

        render(
            <Provider store={createStore()}>
                <CharacterDetails characterId="3" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });

    it('should error component on locations error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);
        dataApiMock.onGet(getLocationsEndpoint()).reply(500);
        dataApiMock.onGet(getSpeciesEndpoint()).reply(200, TestSpecies);

        render(
            <Provider store={createStore()}>
                <CharacterDetails characterId="3" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });

    it('should error component on species error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);
        dataApiMock.onGet(getSpeciesEndpoint()).reply(500);

        render(
            <Provider store={createStore()}>
                <CharacterDetails characterId="3" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });
});
