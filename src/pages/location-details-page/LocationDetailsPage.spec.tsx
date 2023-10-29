import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LocationDetailsPage } from './LocationDetailsPage';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getCharactersEndpoint, getLocationsEndpoint, locationDetailsPagePath } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestCharacters } from 'src/components/characters/test-data';
import { TestLocations } from 'src/components/locations/test-data';

describe('LocationDetailsPage', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);
        dataApiMock.onGet(getLocationsEndpoint()).reply(200, TestLocations);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <MemoryRouter initialEntries={[`${locationDetailsPagePath('2')}`]}>
                    <Routes>
                        <Route path="/location/:locationId" element={<LocationDetailsPage />} />
                    </Routes>
                </MemoryRouter>
            </Provider>,
        );

        await screen.findByText('Location2');

        expect(asFragment()).toMatchSnapshot();
    });
});
