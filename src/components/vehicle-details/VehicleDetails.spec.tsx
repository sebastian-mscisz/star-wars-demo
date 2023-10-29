import { BrowserRouter } from 'react-router-dom';
import { VehicleDetails } from './VehicleDetails';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getCharactersEndpoint, getVehiclesEndpoint } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestCharacters } from '../characters/test-data';
import { TestVehicles } from '../vehicles/test-data';

describe('VehicleDetails', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <VehicleDetails vehicleId="3" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Vehicle3');

        expect(asFragment()).toMatchSnapshot();
    });

    it('should error component on characters error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(500);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);

        render(
            <Provider store={createStore()}>
                <VehicleDetails vehicleId="4" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });

    it('should error component on vehicles error response', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(500);

        render(
            <Provider store={createStore()}>
                <VehicleDetails vehicleId="2" />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('500 No connection. Please try again later.');
    });
});
