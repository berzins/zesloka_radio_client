
const initialSate = {
    search_in_artist: true,
    search_in_song: true,
    search_in_youtube:true
}

const appFunctionStateReducer = (state = initialSate, action) => {
    switch(action.type) {
        case "ONCLICK_YOUTUBE_TOGGLE": {
            var newState = {...state, search_in_youtube: !state.search_in_youtube};
            return newState;
            break;
        }
        case "SEARCH_IN_SONG_TOGGLE": {
            return {...state, search_in_song: !state.search_in_song}
            break;
        }
        case "SEARCH_IN_ARTIST_TOGGLE": {
            return {...state, search_in_artist: !state.search_in_artist}
            break;
        }
    }
    return state;
}

export default appFunctionStateReducer;