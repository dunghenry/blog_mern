import { combineReducers } from "redux";
import posts from './posts';
import modal from './modal';
const rootReducer = combineReducers({
    posts,
    modal
})
export default rootReducer;