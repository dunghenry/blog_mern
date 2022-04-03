import { initialState } from '../../constant';
import {getType, showModal, hideModal} from '../actions'
export default function modalReducers(state = initialState.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                isShow: true
            };
        case getType(hideModal):
            return {
                isShow: false
            };
        default:
            return state;
    }
}