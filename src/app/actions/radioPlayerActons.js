import axios from 'axios'
import {RADIO_DATABASE_URL} from '../constants/radioDatabase'


const doRestCall = (uri ,succsess, fail) => {
    return (dispatch) => {
        axios.get(uri)
        .then(function(response) {
            dispatch({type: succsess, payload: response.data})              
        })
        .catch(function(error) {
            dispatch({type: error, payload: error})
        })
    }
}


// Play first song from playlist

export const RADIO_PLAY = "RADIO_PLAY"
export const RADIO_PLAY_FAILED = "RADIO_PLAY_FAILED"

export const radioPlay = () => {
    const uri = RADIO_DATABASE_URL + "play"
    return doRestCall(uri, RADIO_PLAY, RADIO_PLAY_FAILED)

}


// Stop radio player

export const RADIO_STOP = "RADIO_STOP"
export const RADIO_STOP_FAILED = "RADIO_STOP_FAILED"

export const radioStop = () => {
    const uri = RADIO_DATABASE_URL + "stop"
    return doRestCall(uri, RADIO_STOP, RADIO_STOP_FAILED)
}


// Clear playlers playlist

export const RADIO_CLEAR_PLAYLIST = "RADIO_CLEAR_PLAYLIST"
export const RADIO_CLEAR_PLAYLIST_FAILED = "RADIO_CLEAR_PLAYLIST_FAILED"

export const radioClearPlaylist = () => {
    const uri = RADIO_DATABASE_URL + "clearPlaylist"
    return doRestCall(uri, RADIO_CLEAR_PLAYLIST, RADIO_CLEAR_PLAYLIST_FAILED)
}


// Toggle Auto Dj state

export const RADIO_TOGGLE_AUTO_DJ = "RADIO_TOGGLE_AUTO_DJ"
export const RADIO_TOGGLE_AUTO_DJ_FAILED = "RADIO_TOGGLE_AUTO_DJ_FAILED"

export const radioToggleAutoDj = () => {
    const uri = RADIO_DATABASE_URL + "toggleAutoDj"
    return doRestCall(uri, RADIO_TOGGLE_AUTO_DJ, RADIO_TOGGLE_AUTO_DJ_FAILED)
}



// get Auto Dj sate

export const GET_AUTO_DJ_STATE = "GET_AUTO_DJ_STATE"
export const GET_AUTO_DJ_STATE_FAILED = "GET_AUTO_DJ_STATE_FAILED"

export const getAutoDjState = () => {
    const uri = RADIO_DATABASE_URL + "getAutoDjState"
    return doRestCall(uri, GET_AUTO_DJ_STATE, GET_AUTO_DJ_STATE_FAILED)
}