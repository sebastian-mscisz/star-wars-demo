import { BrowserRouter } from 'react-router-dom';
import { Vehicles } from './Vehicles';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getVehiclesEndpoint } from 'src/common';
import { TestVehicles } from './test-data';
import { Provider } from 'react-redux';
import { createStore } from '../../store';

describe('Vehicles', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getVehiclesEndpoint()).reply(200, TestVehicles);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <Vehicles />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Vehicle2');

        expect(asFragment()).toMatchSnapshot();
    });
});
