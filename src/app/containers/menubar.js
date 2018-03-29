import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SearchField from './search_field'
import {openActionModal} from '../actions/actionModalActions'


class MenuBar extends Component {

    render() {
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <form className="navbar-form navbar-left"><SearchField/>
                        </form>
                        <a className="btn navbar-btn" href="#">
                            <span className="glyphicon glyphicon-refresh"></span>
                        </a>
                        <a href="#" type="button" className=" btn navbar-btn pull-right"
                            onClick={() => this.props.openActionModal() }
                        >
                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openActionModal: openActionModal
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)