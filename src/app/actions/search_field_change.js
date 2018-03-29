import axios from 'axios';
import store from '../store';
import {RADIO_DATABASE_URL} from '../constants/radioDatabase'

let getSearchInOptions = (search_state) => {
    var options = null;

    if(search_state.search_in_artist === true) {
        options = "artist"
    }
    if(search_state.search_in_song === true) {
        options = options !== null ? options + "_title" : "title" 
    }
    if(options === null) {
        options = "artist_title"
    }
    return "search_in=" + options;
}

export const searchFieldChange = (text, search_state) => {
    var uri = RADIO_DATABASE_URL + 'songslike?value=' + text + "&" + getSearchInOptions(search_state);
    return (dispatch) => {
        axios.get(uri)
            .then(function(response) {  
                dispatch({type:'SONG_DATA_ARRIVED', payload: response.data})
            })
            .catch(function(error) {        
                dispatch({type:'SONG_DATA_ERROR', payload: error})
            });
    }
}

