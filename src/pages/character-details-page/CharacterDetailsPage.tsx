import { CharacterDetails } from 'src/components';
import { useRequiredParams } from 'src/common';

export const CharacterDetailsPage: React.FC = () => {
    const { characterId } = useRequiredParams<{ characterId: string }>();

    return <CharacterDetails characterId={characterId} />;
};
