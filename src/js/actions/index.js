import axios from "axios";
import { createAction } from 'redux-actions';

const DOG_URL = 'https://dog.ceo/api/breed/';

export const FETCH_DOG_IMAGES = 'FETCH_DOG_IMAGES';

export const fetchDogImages = createAction(FETCH_DOG_IMAGES, async term => {
    term = term.toLowerCase();
    const url = DOG_URL + term + '/images/random';
    const request = await axios.get(url);
    return {
        breed: term,
        image: request.data.message
    };

});