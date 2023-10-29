import { BrowserRouter } from 'react-router-dom';
import { CharactersCard } from './CharactersCard';
import { render } from '@testing-library/react';
import { TestCharacter } from '../characters/test-data';

describe('Characters card', () => {
    it('should render', () => {
        const { asFragment } = render(<CharactersCard item={TestCharacter} />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
