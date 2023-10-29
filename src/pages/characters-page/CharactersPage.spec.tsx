import { BrowserRouter } from 'react-router-dom';
import { CharactersPage } from './CharactersPage';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getCharactersEndpoint } from 'src/common';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { TestCharacters } from 'src/components/characters/test-data';

describe('CharactersPage', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <CharactersPage />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Character4');

        expect(asFragment()).toMatchSnapshot();
    });
});
