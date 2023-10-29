import { BrowserRouter } from 'react-router-dom';
import { VehiclesPage } from './VehiclesPage';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getVehiclesEndpoint } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestVehicles } from 'src/components/vehicles/test-data';

describe('VehiclesPage', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <VehiclesPage />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Vehicle2');

        expect(asFragment()).toMatchSnapshot();
    });
});
