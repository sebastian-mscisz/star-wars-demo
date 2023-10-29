import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { VehicleDetailsPage } from './VehicleDetailsPage';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getCharactersEndpoint, getVehiclesEndpoint, vehicleDetailsPagePath } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestCharacters } from 'src/components/characters/test-data';
import { TestVehicles } from 'src/components/vehicles/test-data';

describe('VehicleDetailsPage', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <MemoryRouter initialEntries={[`${vehicleDetailsPagePath('1')}`]}>
                    <Routes>
                        <Route path="/vehicle/:vehicleId" element={<VehicleDetailsPage />} />
                    </Routes>
                </MemoryRouter>
            </Provider>,
        );

        await screen.findByText('Vehicle1');

        expect(asFragment()).toMatchSnapshot();
    });
});
