import {combineReducers} from "redux";
import fetchDogImages from './reducer_fetchDogImages'

export default combineReducers({
    dogInfo: fetchDogImages
});