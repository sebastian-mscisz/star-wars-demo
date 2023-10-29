import { BrowserRouter } from 'react-router-dom';
import { CharactersUi } from './CharactersUi';
import { render } from '@testing-library/react';
import { TestCharacters } from '../test-data';

describe('CharactersUi', () => {
    it('should render', () => {
        const { asFragment } = render(<CharactersUi characters={TestCharacters} />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
