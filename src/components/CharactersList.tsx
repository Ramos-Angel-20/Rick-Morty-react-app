import { useEffect } from 'react';

import useFetchCharacters from '../hooks/useFetchCaracters';
import { ICharacter } from '../interfaces-types';
import CharacterItem from './CharacterItem';

const CharactersList = (props: any) => {
    const { fetchAllCaracters, getPrevCharactersPage, getNextCharactersPage, charactersList, loading } = useFetchCharacters();

    useEffect(() => {
        fetchAllCaracters();
    }, []);

    return (
        <div className='characters-list'>
            <div className="characters-list__container">
                {loading ? <h1>Loading...</h1> : charactersList?.map((character: ICharacter) => (
                    <CharacterItem {...character} key={character.id} />
                ))}
            </div>
            <div className="characters-list__actions">
                <button onClick={getPrevCharactersPage}>Prev</button>
                <button onClick={getNextCharactersPage}>Next</button>
            </div>
        </div>
    );
}

export default CharactersList;
