import {
    GET_AUTO_DJ_STATE,
    GET_AUTO_DJ_STATE_FAILED,
    RADIO_TOGGLE_AUTO_DJ
} from '../actions/radioPlayerActons'

export const AUTO_DJ_STATE_ENABLED = 1
export const AUTO_DJ_STATE_UNKNOWN = 0
export const AUTO_DJ_STATE_DISABLED = -1

const initialState = {
    autoDj: AUTO_DJ_STATE_UNKNOWN
}

const getSate = (state, acton) => {
    if(acton.payload == true) {
        console.log("true statement = " + acton.payload)
        return {...state, autoDj: AUTO_DJ_STATE_ENABLED }
    } 
    else if(acton.payload == false) {
        console.log("false statement = " + acton.payload)
        return {...state, autoDj: AUTO_DJ_STATE_DISABLED }
    } 
    else {
        console.log("other statement = " + acton.payload)
        return {...state, autoDj: AUTO_DJ_STATE_UNKNOWN }
    }
}

export const radioPlayerReducer = (state = initialState, acton) => {
    switch(acton.type) {
        case GET_AUTO_DJ_STATE: {
            return getSate(state, acton)
        }
        case GET_AUTO_DJ_STATE_FAILED: {
            return {...state, autoDj: AUTO_DJ_STATE_UNKNOWN}
        }
        case RADIO_TOGGLE_AUTO_DJ: {
            return getSate(state, acton)
        }
    }
    return state
}