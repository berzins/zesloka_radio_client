import axios from 'axios';
import {RADIO_DATABASE_URL} from '../constants/radioDatabase'
import qwant from 'qwant-api'

export const FETCH_THUMBNAILS_BEIGN = "FETCH_THUMBNAILS_BEIGN";
export const FETCH_THUMBNAILS_SUCCESS = "FETCH_THUMBNAILS_SUCCESS";
export const FETCH_THUMBNAILS_FAILURE = "FETCH_THUMBNAILS_FAILURE";

export const fetchThumbnailsBegin = () => ({
    type: FETCH_THUMBNAILS_BEIGN
})

export const fetchThumbailsSuccess = (thumbnails) => ({
    type: FETCH_THUMBNAILS_SUCCESS,
    payload: thumbnails
})

export const fetchThumbnailsFailure = (error) => ({
    type: FETCH_THUMBNAILS_FAILURE,
    payload: error
});

export function fetchThumbnails() {
    
    return (dispatch) => {
        dispatch(fetchThumbnailsBegin())

        //generate 12 random numbers.
        var values = [];
        for(var i = 0 ; i < 12; i++) {
            values.push(Math.floor(Math.random() * 1800));
        }
        var uri = RADIO_DATABASE_URL + "songThumbnails?song_index=" + values.join('_')
            
        return axios.get(uri)
            .then(function(response){
                var thumbnails = response.data.map(function(item) {
                        return {
                            text: item.song.artist + " - " + item.song.title,
                            img: item.img
                        }
                    } 
                )
                dispatch(fetchThumbailsSuccess(thumbnails))
            })
            .catch(function(error){
                dispatch(fetchThumbnailsFailure(error))
            })
    };
}


