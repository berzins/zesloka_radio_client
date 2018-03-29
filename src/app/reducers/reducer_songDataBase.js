import axios from 'axios';
import store from '../store.js';


const initialState = {
    initial_state: true,
    fetched: false,
    fetching: false,
    songs: [],
    error: null
}

const songDbReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SEARCHFIELD_CHANGE": {
            return{...state, fetching: true, initial_state:false}
            break;
        }
        case "SONG_DATA_ARRIVED": {
            return {...state, 
                fetching: false, 
                fetched: true, 
                songs: action.payload,
                initial_state:false 
            }
            break;
        }
        case "SONG_DATA_ERROR": {
            alert("song data arrived error");
            return {...state,
            fetching: false,
            error: action.payload,
            initial_state:false
            }
            break;
        }
    }
    return state;
}

export default songDbReducer;
