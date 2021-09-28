import axios from 'axios';

import { BASE_URL, ICharacter, ICharacters } from '../interfaces-types';

export const getAllCaracters = async (prevNextUrl? : string) => {

    try {
        let response;

        if (prevNextUrl !== null && prevNextUrl !== undefined) {
            response = await axios.get(prevNextUrl);
        } else {
            response = await axios.get(BASE_URL + '/character');
        }
        
        const data: ICharacters = response.data;

        if (response.status !== 200 || !data) {
            throw new Error('An error ocurred during the characters fetch');
        }
        
        const { info, results } = response.data;
        
        return {
            info,
            charactersList: results
        };

    } catch (err) {
        if (err instanceof Error) {
            return err.message;
        }
    }
}

export const getSingleCharacter = async (id: number) => {

    try {
        const response = await axios.get(BASE_URL + `/character/${id}`);
        const data: ICharacter = response.data;
        
        if (response.status !== 200 || !data) {
            throw new Error('An error ocurred during the character fetch');
        }

        return data;

    } catch (err) {
        if (err instanceof Error) {
            return err.message;    
        }
    }
}