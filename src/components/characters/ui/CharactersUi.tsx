import { Characters, charactersPagePath, sortAZ } from 'src/common';
import { CharactersCard, ItemsWithPagination } from 'src/components';
import './CharactersUi.scss';
import { useParams } from 'react-router-dom';

type CharactersUiProps = {
    characters?: Characters;
};

const itemsPerPage = 21;

export const CharactersUi: React.FC<CharactersUiProps> = ({ characters }) => {
    const pageId = useParams();
    const currentPageId = Number(Object.values(pageId)[0]) || 1;

    if (!characters) return null;

    const sortedCharacters = [...characters].sort((a, b) => sortAZ(a.name || '', b.name || ''));

    return (
        <ItemsWithPagination
            items={sortedCharacters}
            itemsPerPage={itemsPerPage}
            currentPageId={currentPageId}
            navPagePath={charactersPagePath()}
            className={'characters'}
            CardComponent={CharactersCard}
        />
    );
};
