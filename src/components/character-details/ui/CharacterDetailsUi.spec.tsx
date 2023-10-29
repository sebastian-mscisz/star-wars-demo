import { BrowserRouter } from 'react-router-dom';
import { CharacterDetailsUi } from './CharacterDetailsUi';
import { render } from '@testing-library/react';
import { TestCharacters, TestSpecies } from '../../characters/test-data';
import { TestLocations } from '../../locations/test-data';
import { TestVehicles } from '../../vehicles/test-data';

describe('CharacterDetailsUi', () => {
    it('should render', () => {
        const { asFragment } = render(
            <CharacterDetailsUi
                character={{
                    ...TestCharacters[1],
                    leftNeighbour: TestCharacters[0],
                    rightNeighbour: TestCharacters[2],
                }}
                locations={TestLocations}
                species={TestSpecies}
                vehicles={TestVehicles}
                characterId={'3'}
            />,
            { wrapper: BrowserRouter },
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
