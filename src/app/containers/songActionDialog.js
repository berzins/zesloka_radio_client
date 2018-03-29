import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {
    onDeselectSongItem, 
    playAsNext, 
    playAsLast,
    moveSongTo
} from '../actions/songItemActions'

export const SONG_ACTION_DIALOG_ID = "songActionDialog"

class SongActionDialog extends Component {

    onHide() {
        this.props.onDeselectSongItem()
    }

    playAsNext(song) {
        this.props.playAsNext(song)
        this.props.onDeselectSongItem()
    }

    playAsLast(song) {
        this.props.playAsLast(song)
        this.props.onDeselectSongItem()
    }

    moveToTrash(song) {
        this.props.moveSongTo(song, 28) // 28 == trash categroy id
        this.props.onDeselectSongItem()
    }


    render() {
        
        let song = this.props.songSelectonState.song
        const title = song == null ? "" : song.artist + " - " + song.title
        const href = song == null ? null : "https://www.youtube.com/results?search_query=" + song.artist + "+-+" + song.title
        
        return(
            <Modal
                show={this.props.songSelectonState.showActions}
                bsSize="small"
                aria-labelledby="contained-modal-title-sm"
            >
                <Modal.Header>
                <Modal.Title id="contained-modal-title-sm">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="list-group">
                    <a 
                        className="list-group-item list-group-item-action" 
                        href={href}
                        target="blank"
                        key="searchInYoutube"
                        onClick={() => this.onHide()}>
                        <h4>Search in Youtube</h4>
                    </a>
                    <a 
                        href={"javascript:;"}
                        className="list-group-item list-group-item-action" 
                        key="playNext"
                        onClick={() => this.playAsNext(song)}>
                        <h4>Play as next</h4>
                    </a>
                    <a 
                        href={"javascript:;"}
                        className="list-group-item list-group-item-action" 
                        key="playLast"
                        onClick={() => this.playAsLast(song)}>
                        <h4>Play as last</h4>
                    </a>
                    <a 
                        href={"javascript:;"}
                        className="list-group-item list-group-item-action" 
                        key="MoveToTrash"
                        onClick={() => this.moveToTrash(song)}>
                        <h4>Move to trash</h4>
                    </a>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.onDeselectSongItem()}>Close</Button>
                </Modal.Footer>
            </Modal>               
        );
    }
}

function mapStateToProps(state) {
    return {
        songSelectonState: state.songActionReducer,
    }
} 

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onDeselectSongItem: onDeselectSongItem,
        playAsNext: playAsNext,
        playAsLast: playAsLast,
        moveSongTo: moveSongTo
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SongActionDialog)


