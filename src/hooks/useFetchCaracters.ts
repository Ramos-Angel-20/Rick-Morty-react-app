import { useReducer } from 'react';

import { CharactersReducerState, CharactersReducerAction, ICharacter } from '../interfaces-types';
import { getAllCaracters } from '../services/api-calls';

const initialCharactersState: CharactersReducerState = {
    loading: false,
    error: null,
    charactersList: null,
    prevUrl: null,
    nextUrl: null
};

const charactersReducer = (state: CharactersReducerState = initialCharactersState, action: CharactersReducerAction): CharactersReducerState => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.payload.isLoading
            };

        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                charactersList: action.payload.list,
                prevUrl: action.payload.prevUrl,
                nextUrl: action.payload.nextUrl
            }

        case 'ERROR':
            return {
                ...state,
                loading: false,
                charactersList: null,
                error: action.payload.errorMessage
            };
    }
}

const useFetchCharacters = () => {

    const [state, dispatch] = useReducer(charactersReducer, initialCharactersState);


    const fetchAllCaracters = (prevNextUrl?: string) => {
        // con ? decimos que "prevNextUrl" es un parametro opcional.
        dispatch({
            type: 'LOADING',
            payload: {
                isLoading: true
            }
        });

        getAllCaracters(prevNextUrl).then((result: any) => {

            dispatch({
                type: 'SUCCESS',
                payload: {
                    list: result.charactersList,
                    prevUrl: result.info.prev,
                    nextUrl: result.info.next
                }
            });

        }).catch((err) => {

            dispatch({
                type: 'ERROR',
                payload: {
                    errorMessage: err
                }
            });

        });
    }


    const getPrevCharactersPage = () => {
        if (state.prevUrl !== '' && state.prevUrl !== null) {
            fetchAllCaracters(state.prevUrl);
        }
        return;
    }

    const getNextCharactersPage = () => {
        if (state.nextUrl !== '' && state.nextUrl !== null) {
            fetchAllCaracters(state.nextUrl);
        }
        return;
    }


    return {
        ...state,
        fetchAllCaracters,
        getPrevCharactersPage,
        getNextCharactersPage
    }
}

export default useFetchCharacters;
