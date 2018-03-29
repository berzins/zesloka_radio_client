import {combineReducers} from 'redux';
import songDbReducer from './reducer_songDataBase';
import appFunctionStateReducer from './reducer_function_state';
import songThumbnailReducer from './reducer_random_songs';
import songActionReducer, {artistSelectReducer} from './reducerSongAction';
import {actionModalVisbilityReducer} from './reducerActionModal'
import {radioPlayerReducer} from './radioPlayerReducer'

const reducers = combineReducers(
    {
        song_db: songDbReducer,
        app_function_state: appFunctionStateReducer,
        song_thumbnails: songThumbnailReducer,
        songActionReducer: songActionReducer,
        artistSelectReducer: artistSelectReducer,
        actionModalVisbilityReducer: actionModalVisbilityReducer,
        radioPlayerReducer: radioPlayerReducer
    }
);

export default reducers;