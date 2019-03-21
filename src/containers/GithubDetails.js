import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
// import * as githubActions from '../store/github/action';
// import * as githubSelectors from '../store/github/reducer';
import * as githubDetailsSelectors from '../store/github/details/reducer';

class GithubDetails extends Component {
    render() {
        if(!this.props.details) return this.renderLoading();
        return (
            <div align='center'>                
                <Detail>
                    <img src={this.props.details.image_url} alt='image'/>
                    <a href={this.props.details.URL}>
                        <h3>{this.props.details.title}</h3>
                    </a>                        
                    <p>owner: {this.props.details.owner_name}</p> 
                    <p>stars: {this.props.details.stars}</p>
                </Detail> 
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
    const details = githubDetailsSelectors.getDetails(state);
    return {
      details
    };
  }

export default connect(mapStateToProps)(GithubDetails);

const Detail = styled.div`
    display: block;
    min-width: 500px;
    max-width: 1000px;
    min-height: 500px;
    max-height: 1000px;
    background-color: #f5f5f5;
    border-radius: 5%;
    text-align: center;
    img {
        max-width: 200px;
        max-height: 200px;
    }
`;
