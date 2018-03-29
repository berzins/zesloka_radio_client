import {
    ACTION_MODAL_OPEN,
    ACTION_MODAL_CLOSE
} from '../actions/actionModalActions'


export const actionModalVisbilityReducer = (state = false, action) => {
    switch(action.type) {
        case ACTION_MODAL_OPEN: {
            return true;
        }
        case ACTION_MODAL_CLOSE: {
            return false;
        }
    }
    return state;    
}

