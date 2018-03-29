import {
    FETCH_THUMBNAILS_BEIGN,
    FETCH_THUMBNAILS_SUCCESS,
    FETCH_THUMBNAILS_FAILURE
} from '../actions/thumbnail_fetch_actions'
//import { access } from 'fs';

const initialState = {
    thumbnails: [],
    error: null,
    loading: false
}

export default function songThumbnailReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_THUMBNAILS_BEIGN: {
            return {
                ...state,
                error: null,
                loading: true
            }

        }
        case FETCH_THUMBNAILS_SUCCESS: {
            return {
                ...state,
                thumbnails: action.payload,
                error: null,
                loading: false
            }
            break;
        }
        case FETCH_THUMBNAILS_FAILURE: {
            return {
                ...state,
                thumnails: [],
                error: action.payload,
                loading: false
            }
        }
        default:
        return state;
    }
}