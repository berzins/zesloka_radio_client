import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {closeActionModal} from '../actions/actionModalActions'
import RadioActionButtons from './radioActionButtons'

class ActionModal extends Component {

    getContentFormat() {
        return  " col-lg-" + 12 + " " + 
                "col-md-" + 12  + " " +
                "col-sm-" + 12 + " " +
                "col-xs-" + 12 + " "
    }

    getButtonFormat() {
        return  " col-lg-" + 1 + " " + 
                "col-md-" + 2  + " " +
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

    render() {
        return(
            <Modal
                show={this.props.visible}
                bsSize="large"
                aria-labelledby="contained-modal-title-sm"
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-sm">Control panel</Modal.Title>
                </Modal.Header>
                <Modal.Body className={ this.getContentFormat() + "border border-dark"}>

                    <div className={"jumbotron action-modal-content " + this.getContentFormat()}>
                        <RadioActionButtons/>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-large"onClick={ () => this.props.closeActionModal() }>Close</Button>
                </Modal.Footer>
            </Modal>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.actionModalVisbilityReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        closeActionModal: closeActionModal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionModal)