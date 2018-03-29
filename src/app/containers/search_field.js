import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchFieldChange} from '../actions/search_field_change';
import {deselectArtist} from '../actions/songItemActions'
import {
    toggleOnclikYoutube,
    toggleSearchInArtist,
    toggleSearchInSong
} from '../actions/app_function_state_change';

import store from '../store'

class SearchField extends Component {


    componentDidUpdate() {
        const artist = this.props.artistSelectReducer
        if(artist != null) {
            this.props.searchFieldChange(artist, this.props.search_state)
            this.props.deselectArtist()
        }
    }

    render() {
        const artist = this.props.artistSelectReducer
        return(
            <div>
                {/* <div className="input-group input-group-lg rounded-0"> */}
                {/* <span className="input-group-addon">Search</span> */}

                <input 
                    type='text'
                    className="form-control"
                    placeholder="Nirvana"
                    value={artist != null ? artist : undefined}
                    id='search_field' 
                    onChange = { () => this.props.searchFieldChange(
                        document.getElementById('search_field').value, this.props.search_state) } />
                
                {/* <span className="input-group-addon">by: </span>  */}
                {/* <span   onClick = { () => this.props.toggleSearchInSong()} */}
                        {/* className={ 'input-group-addon btn btn-info ' +  */}
                                    {/* (this.props.search_state.search_in_song === true ? 'active' : '')}  */}
                        {/* autocompete="on">title</span> */}
                {/* <span   onClick = {() => this.props.toggleSearchInArtist()} */}
                        {/* className={"input-group-addon btn btn-info "  +  */}
                                    {/* (this.props.search_state.search_in_artist === true ? "active" : "")}   */}
                        {/* autocompete="on">artist</span> */}
                {/* <span   onClick = { () => this.props.toggleOnclikYoutube() } */}
                        {/* className={"input-group-addon btn btn-info " +  */}
                                    {/* (this.props.search_state.search_in_youtube === true ? "active" : "")}  */}
                        {/* autocompete="on"><img src="https://png.icons8.com/color/160/youtube-play.png"  */}
                                        {/* style={{width:1.2+'em'}}/></span>  */}
                </div>
            // </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleOnclikYoutube: toggleOnclikYoutube,
        searchFieldChange: searchFieldChange,
        toggleSearchInArtist: toggleSearchInArtist,
        toggleSearchInSong: toggleSearchInSong,
        deselectArtist: deselectArtist
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        search_state: state.app_function_state,
        artistSelectReducer: state.artistSelectReducer
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchField);

