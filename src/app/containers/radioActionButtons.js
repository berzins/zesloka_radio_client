import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    radioPlay,
    radioStop,
    radioToggleAutoDj,
    radioClearPlaylist,
    getAutoDjState
} from '../actions/radioPlayerActons'
import {
    AUTO_DJ_STATE_ENABLED,
    AUTO_DJ_STATE_UNKNOWN,
    AUTO_DJ_STATE_DISABLED
} from '../reducers/radioPlayerReducer'

class RadioActionButtons extends Component {

    getButtonFormat() {
        return  " col-lg-" + 3 + " " + 
                "col-md-" + 3  + " " +
                "col-sm-" + 3 + " " +
                "col-xs-" + 4 + " "
    }

    getPlayerButtonFormat() {
        return this.getButtonFormat() + "button-player " 
    }

    createPlayerButton(title, icon, callback){
        return(
            <button className={"btn btn-lg btn-link " + this.getButtonFormat()}
                    onClick={() => callback()}
            >
                <div className={"glyphicon " + icon}></div>
                <div>{title}</div>        
            </button>
        )
    }

    componentDidMount() {
        this.props.getAutoDjState()
    }

    render() {
        const mode = this.props.playerState.autoDj; 
        const modeText =    mode === AUTO_DJ_STATE_ENABLED ? "Enabled" : 
                            mode === AUTO_DJ_STATE_DISABLED ? "Disabled" : "Unknown"
        return(
            <div>
                <h3 className="display-3">Playar actions</h3>
                <hr/>
                {this.createPlayerButton("Play", "glyphicon-play", this.props.radioPlay)}
                {this.createPlayerButton("Stop", "glyphicon-stop", this.props.radioStop)}
                {this.createPlayerButton(modeText, "glyphicon-repeat", this.props.radioToggleAutoDj)}
                {this.createPlayerButton("Clear", "glyphicon-remove", this.props.radioClearPlaylist)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playerState: state.radioPlayerReducer  
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        radioPlay: radioPlay,
        radioStop: radioStop,
        radioToggleAutoDj: radioToggleAutoDj,
        radioClearPlaylist: radioClearPlaylist,
        getAutoDjState: getAutoDjState
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioActionButtons)