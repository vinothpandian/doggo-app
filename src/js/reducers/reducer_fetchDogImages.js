import {FETCH_DOG_IMAGES} from "../actions";
import { handleAction } from 'redux-actions';

const defaultState = {
    breed: "Waiting for you to search....",
    image: "default"
};


export default handleAction(FETCH_DOG_IMAGES, (state, action) => {

    if(action.payload.image === "Breed not found") {
        return {
            breed: `Sorry..... Couldn't find ${action.payload.breed} breed dog`,
            image: "missing"
        }
    }

    return {
        breed: `Image of ${action.payload.breed}`,
        image: action.payload.image
    }
}, defaultState);