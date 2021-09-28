import { useReducer } from 'react';

import { CharacterReducerState, CharacterReducerAction } from '../interfaces-types';
import { getSingleCharacter } from '../services/api-calls';

const initialCharacterState: CharacterReducerState = {
    characterInfo: null,
    error: null,
    isLoading: false
}

const characterReducer = (state: CharacterReducerState = initialCharacterState, action: CharacterReducerAction): CharacterReducerState => {

    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload.isLoading
            };

        case 'SUCCESS':
            return {
                ...state,
                characterInfo: action.payload.characterInfo,
                isLoading: false
            };

        case 'ERROR':
            return {
                characterInfo: null,
                isLoading: false,
                error: action.payload.errorMessage
            };

        default: 
            return state;
    }
}

const useFetchCharacter = () => {

    const [state, dispatch] = useReducer(characterReducer, initialCharacterState);

    const fetchCharacter = (id: number) => {
    
        // Comienza la carga de los datos
        dispatch({
            type: 'LOADING',
            payload: {
                isLoading: true
            }
        });

        getSingleCharacter(id).then((result: any) => {

            dispatch({
                type: 'SUCCESS',
                payload: {
                    characterInfo: result
                }
            });

        }).catch((err) => {

            dispatch({ 
                type: 'ERROR',
                payload: {
                    errorMessage: err
                }
            });

            console.log(err);
        });
    }

    return {
        ...state,
        fetchCharacter
    };
}

export default useFetchCharacter;