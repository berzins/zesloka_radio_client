import { 
    SONG_ITEM_SELECT, 
    SONG_ITEM_DESELECT, 
    ARTIST_SELECTED,
    ARTIST_DESELECTED 
} from '../actions/songItemActions' 

const initialState = {
    song: null,
    showActions: false
}

const songActionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SONG_ITEM_SELECT: {
            return {...state, song: action.payload, showActions:true }
        }
        case SONG_ITEM_DESELECT: {
            return {...state, showActions:false } 
        }
        default:
            return state;
    }
    return state;
}



export const artistSelectReducer = (state = null, action) => {
    switch(action.type) {
        case ARTIST_SELECTED: {
            return action.payload;
        }
        case ARTIST_DESELECTED: {
            return null;
        }
    }
    return state;
}




export default songActionReducer;