import { BrowserRouter } from 'react-router-dom';
import { LocationsPage } from './LocationsPage';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getLocationsEndpoint } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestLocations } from 'src/components/locations/test-data';

describe('LocationsPage', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <LocationsPage />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Location3');

        expect(asFragment()).toMatchSnapshot();
    });
});
