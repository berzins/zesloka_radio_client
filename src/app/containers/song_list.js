import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchThumbnails} from '../actions/thumbnail_fetch_actions'
import {onSelectSongItem, selectArtist} from '../actions/songItemActions' 


class SongList extends Component {

    onItemClik(song){
        this.props.onSelectSongItem(song)
    }

    componentDidMount() {
        this.props.fetchThumbnails()
    }

    createListItem() {
        var songs = this.props.songDB.songs.sort((a,b)=> {
            return (a.artist > b.artist) ? 1 :((a.title > b.title) ? -1 : 0);
        });
        var counter = 0;
        return songs.map((song, i) => {    
            return (
            <a  href={"javascript:;"}
                onClick={ () => this.onItemClik(song) } 
                className="list-group-item list-group-item-action"
                key={song.artist+song.title+(counter++)}>{song.artist} - {song.title} 
            </a>
            );
        })
    }

    getSetOfArtists(songs) {
        const set = [];
        songs.map((song, i) => {
            if(!set.includes(song.artist)) {
                set.push(song.artist);
            }
        })
        return set.sort();
    }

    createArtistListItem() {
        const artists = this.getSetOfArtists(this.props.songDB.songs);
        return artists.map((artist, i) => {
            return(
                <a 
                    href={"javascript:;"} 
                    className="list-group-item list-group-item-action" 
                    key={artist+i}
                    onClick={() => this.props.selectArtist(artist)}
                    >{artist}</a>
            );
        })
    }

    createThumbnails(thumb) {
        return thumb.map((t, i) => {

            var getThumbnail = (t) => {
                return(
                    <div className={
                        "col-lg-" + 2 + " " + 
                        "col-md-" + 3  + " " +
                        "col-sm-" + 6 + " " +
                        "col-xs-" + 12 + " " +
                        "border border-dark"
                        }
                        key={i+1} 
                    >   
                        <a key={i+2} href={"https://www.youtube.com/results?search_query=" + t.text} target="blank">
                                <img key={i+3} src={t.img} className="img" style={{overflow:"hidden", width:'100%'}} alt={t.text}/>
                                <h6 key={i+4} className="text-center"> {t.text} </h6> <br key={i+5}/>
                        </a>
                    </div>
                );
            }
            
            var getFix = (visibility) => {
                return(
                    <div className={"clearfix " + visibility}></div>
                );
            }

            if(i === 6) {
                return(<div>{getFix("visible-lg")}{getThumbnail(t)}</div>);
            }
            if(i === 4) {
                return(<div>{getFix("visible-md")}{getThumbnail(t)}</div>);
            }
            if(i === 2) {
                return(<div>{getFix("visible-sm")}{getThumbnail(t)}</div>);
            }
            else {
                return getThumbnail(t);
            }
        });
    }

    render() {
        const songDB = this.props.songDB;
        if(songDB.fetching || !songDB.initial_state) {
        
            if(songDB.songs.length > 200) {
                return(
                    <div className="list-group">
                        {this.createArtistListItem()}
                    </div>
                );
            } else {
                return(
                    <div className="list-group">
                        {this.createListItem()}
                    </div>
                );
            }
        } else if(songDB.fetching) {
            return(
                <div className="alert alert-danger">
                    Lamājas...
                </div>
            );
        } else if(songDB.error != null) {
            return(
                <div>
                    <code><b>{songDB.error}</b></code>
                </div>
            );
        } else {
            var thumb = this.props.song_thumbnails;
            if(thumb.loading) {
                
                return (
                    <div className="jumbotron jumbotron-fluid">
                        <h4 className="text-center">..ooooooooooooooooooooo..</h4>
                    </div>        
                )
            } else {
                return(           
                     <div className="jumbotron jumbotron-fluid">
 
                        <div className={
                        "col-lg-" + 12 + " " + 
                        "col-md-" + 12  + " " +
                        "col-sm-" + 12 + " " +
                        "col-xs-" + 12 + " " +
                        "border border-dark"
                        } >
                            <h3>Random songs</h3><hr/>
                        </div>
                        <div className="container-fluid" style={{marginTop:"3%"}}> 
                            <div className="row">
                                {this.createThumbnails(thumb.thumbnails)}
                            </div>
                        </div>
                     </div>
                );
            }
        }
    }
}

function mapStateToProps(state) {
    return {
        songDB: state.song_db,
        search_state: state.app_function_state,
        song_thumbnails: state.song_thumbnails
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchThumbnails: fetchThumbnails,
        onSelectSongItem: onSelectSongItem,
        selectArtist: selectArtist
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SongList)