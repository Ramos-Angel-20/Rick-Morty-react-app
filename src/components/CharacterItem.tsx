import { useHistory } from 'react-router-dom';
import { ICharacter } from '../interfaces-types';

const CharacterItem = (props: ICharacter) => {
    
    const history = useHistory();

    const characterDetailsRedirect = () => {
        history.push(`/character/${props.id}`);
    }

    return (
        <div className='character-item'>
            <div style={{backgroundImage: `url('${props.image}')`}} className='character-item__image'>
                
            </div>

            <div className='character-item__info'>
                <h2 className='character-item__info-name'>{props.name}</h2>
                <p className='character-item__info-specie'>Specie: {props.species}</p>
                <p className='character-item__info-gender'>Gender: {props.gender}</p>
                
                <p className='character-item__info-status'>
                    Status: {props.status}  
                    <div className={`character-item__info-status-ball ${props.status}`}></div>
                </p>
                <button className='character-item__info-button' onClick={characterDetailsRedirect}>
                    Details
                </button>
            </div>
        </div>
    );
}

export default CharacterItem;
