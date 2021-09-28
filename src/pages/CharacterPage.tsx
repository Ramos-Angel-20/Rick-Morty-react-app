import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFetchCharacter from '../hooks/useFetchCharacter';
import CharacterDetail from '../components/CharacterDetail';

const CharacterPage = () => {

    const { characterId } = useParams<any>();

    const { isLoading, error, characterInfo, fetchCharacter } = useFetchCharacter();

    useEffect(() => {
        fetchCharacter(characterId);
    }, []);

    return (
        <div className='character-page'>
            <div className='character-page__content'>
                {isLoading ? <p>Loading...</p> : <CharacterDetail {...characterInfo!} />}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default CharacterPage;
