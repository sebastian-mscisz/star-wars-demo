import { BrowserRouter } from 'react-router-dom';
import { LocationDetails } from './LocationDetails';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getCharactersEndpoint, getLocationsEndpoint } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestCharacters } from '../characters/test-data';
import { TestLocations } from '../locations/test-data';

describe('LocationDetails', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
        dataApiMock.reset();
    });

    it('should render', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <LocationDetails locationId="2" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Location2');

        expect(asFragment()).toMatchSnapshot();
    });

    it('should error component on characters error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(500);
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);

        render(
            <Provider store={createStore()}>
                <LocationDetails locationId="3" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });

    it('should error component on locations error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getLocationsEndpoint()).reply(500);

        render(
            <Provider store={createStore()}>
                <LocationDetails locationId="3" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });
});
