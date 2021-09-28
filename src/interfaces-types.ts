export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
};

export interface ICharacters {
    results: ICharacter[]
};

export type CharactersReducerState = {
    charactersList: ICharacter[] | null,
    error: string | null,
    loading: boolean,
    prevUrl: string | null,
    nextUrl: string | null
};

export type CharactersReducerAction = {
    type: 'SUCCESS',
    payload: {
        list: ICharacter[],
        prevUrl: string | null,
        nextUrl: string | null
    }
} | {
    type: 'ERROR',
    payload: {
        errorMessage: string
    }
} | {
    type: 'LOADING',
    payload: {
        isLoading: boolean
    }
};

export type CharactersListResponse = {
    info: {
        count: number,
        next: string | null,
        pages: number,
        prev: string | null
    },
    charactersList: ICharacter[]
}

export type ApplicationTheme = 'light-mode' | 'dark-mode' | null | string;

export type ApplicationThemeContextProps = {
    theme: string,
    toggleThemeHandler: Function
}

// Hook useFetchCharacter
export type CharacterReducerState = {
    characterInfo: ICharacter | null,
    isLoading: boolean,
    error: string | null
} 

export type CharacterReducerAction = {
    type: 'SUCCESS',
    payload: {
        characterInfo: ICharacter
    }
} | {
    type: 'ERROR',
    payload: {
        errorMessage: string
    }
} | {
    type: 'LOADING', 
    payload: {
        isLoading: boolean
    }
}

export const BASE_URL = 'https://rickandmortyapi.com/api';