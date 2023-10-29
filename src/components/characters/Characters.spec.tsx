import { BrowserRouter } from 'react-router-dom';
import { Characters } from './Characters';
import { screen, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { DataApi } from 'src/xhr';
import { getCharactersEndpoint } from 'src/common';
import { TestCharacters } from './test-data';
import { Provider } from 'react-redux';
import { createStore } from '../../store';

describe('Characters', () => {
    let dataApiMock: MockAdapter;

    beforeEach(() => {
        dataApiMock = new MockAdapter(DataApi);
    });

    it('should render', async () => {
        dataApiMock.onGet(getCharactersEndpoint()).reply(200, TestCharacters);

        const { asFragment } = render(
            <Provider store={createStore()}>
                <Characters />
            </Provider>,
            { wrapper: BrowserRouter },
        );

        await screen.findByText('Character2');

        expect(asFragment()).toMatchSnapshot();
    });
});
