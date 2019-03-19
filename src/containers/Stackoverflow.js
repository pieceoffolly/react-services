import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Stackoverflow extends Component {

    render() {
        return (
            <div>
                <h3>Stackoverflow questions</h3>
            </div>            
        )
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(Stackoverflow);