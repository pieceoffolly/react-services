import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as ghActions from '../store/gh/action';
import * as ghSelectors from '../store/gh/reducer';
import DetailsView from '../components/DetailsView';

class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    };

    render() {
        if(!this.props.details) return this.renderLoading();
        return (
            <div>
                <DetailsView
                    details={this.props.details}
                    detailsType={this.props.detailsType}
                />
            </div>
        )
    };

    renderLoading() {
        return (
            <h3>Loading...</h3>
        )
    };
}

function mapStateToProps(state) {
    const [details, detailsType] = ghSelectors.getElement(state);
    return {
      details,
      detailsType
    };
  }

export default connect(mapStateToProps)(DetailsScreen);