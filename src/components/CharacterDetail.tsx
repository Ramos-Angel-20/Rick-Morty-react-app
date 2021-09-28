import { ICharacter } from "../interfaces-types";

const CharacterDetail = (props: ICharacter) => {

    return (
        <div className='character-detail'>
            <div className='character-detail__image'>
                <img src={props.image} alt={props.name} />
            </div>

            <div className='character-detail__info'>
                <div className='character-detail__info-name'>
                    <h2>{props.name}</h2>
                </div>
                <div className='character-detail__info-origin'>
                    <p>Planeta de origen: {props.origin.name}</p>
                </div>
                <div className='character-detail__info-lastseen'>
                    <p>Visto por ultima vez: {props.location.name}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;