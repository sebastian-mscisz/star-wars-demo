import { withHandlers } from 'src/hoc';
import { CharactersUi } from './ui/CharactersUi';
import { useCharacters } from 'src/hooks';

const CharactersWithHandlers = withHandlers(CharactersUi);

export const Characters: React.FC = () => {
    const { data: characters, isLoading, loadingError } = useCharacters();

    return <CharactersWithHandlers isLoading={isLoading} characters={characters} hasError={!!loadingError} />;
};
