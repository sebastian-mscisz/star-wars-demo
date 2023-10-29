import { BrowserRouter } from 'react-router-dom';
import { Locations } from './Locations';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getLocationsEndpoint } from 'src/common';
import { TestLocations } from './test-data';
import { Provider } from 'react-redux';
import { createStore } from '../../store';

describe('Locations', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <Locations />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Location2');

        expect(asFragment()).toMatchSnapshot();
    });
});
