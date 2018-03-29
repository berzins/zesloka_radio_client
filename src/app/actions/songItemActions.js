import axios from 'axios'
import {RADIO_DATABASE_URL} from '../constants/radioDatabase'

// song selection actions

export const SONG_ITEM_SELECT = "SONG_ITEM_SELECT";
export const SONG_ITEM_DESELECT = "SONG_ITEM_DESELECT";

export const onSelectSongItem = function(song) {
    return {
        type: SONG_ITEM_SELECT,
        payload: song
    }
}

export const onDeselectSongItem = function() {
    return {
        type: SONG_ITEM_DESELECT
    }
}


// song load actions

export const SONG_LOADED = "SONG_LOADED"
export const SONG_LOAD_FAILED = "SONG_LOAD_FAILED"
export const SONG_NOT_SELECTED = "SONG_NOT_SELECTED"

const loadSong = (song, placement) => {
    if(song === null) {
        return (dispatch) => {
            dispatch({type: SONG_NOT_SELECTED})
        }
    }

    let uri = RADIO_DATABASE_URL + "loadSong/?track_id=" + song.id + "&placement=" + placement
    return (dispatch) => {
        axios.get(uri)
            .then(function(response) {
                dispatch({type: SONG_LOADED, payload: song })
            })
            .catch(function(error){
                dispatch({type: SONG_LOAD_FAILED, payload: song})
            })
    }
}

export const playAsNext = (song) => {
    return loadSong(song, "top")    
}

export const playAsLast = (song) => {
    return loadSong(song, "bottom")
}


// song move actions

export const SONG_MOVED = "SONG_MOVED"
export const SONG_MOVE_FAILED = "SONG_MOVE_FAILED" 

export const moveSongTo = (song, cat) => {
    
    if(song == null) {
        return (dispatch) => {
            dispatch({type: SONG_NOT_SELECTED});
        }
    }

    const uri = RADIO_DATABASE_URL + "moveSongTo/?song_id=" + song.id + "&target_category=" + cat;

    return (dispatch) => {
        axios.get(uri)
            .then(function(response) {
                dispatch({type: SONG_MOVED, payload: response})
            })
            .catch(function(error){
                dispatch({type: SONG_MOVE_FAILED, payload: error})
            })
    }
}


// atist select actions

export const ARTIST_SELECTED = "ARTIST_SELECTED"
export const ARTIST_DESELECTED = "ARTIST_DESELECTED"

export const selectArtist = (artist) => {
    return {type: ARTIST_SELECTED, payload:artist}
}

export const deselectArtist = () => {
    return { type: ARTIST_DESELECTED}
}


