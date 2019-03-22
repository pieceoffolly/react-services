import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
// import * as githubActions from '../store/github/action';
// import * as githubSelectors from '../store/github/reducer';
import * as githubDetailsActions from '../store/github/details/action';
import * as githubDetailsSelectors from '../store/github/details/reducer';

class GithubDetails extends Component {

    componentDidMount() {
        this.props.fetchDetails(this.props.match.params.reposId)
    }

    render() {
        if(!this.props.details) return this.renderLoading();
        return (
            <div align='center'>   
                <Back onClick={() =>this.props.history.goBack()} > Back </Back>             
                <Detail>
                    <img src={this.props.details.image_url} alt='image'/>
                    <a href={this.props.details.url} target='_blank'>
                        <h3>{this.props.details.name}</h3>
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

const mapDispatchStateToProps = (dispatch) => {
   return {
       fetchDetails: (reposId) => dispatch(githubDetailsActions.fetchDetails(reposId))
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(GithubDetails);

const Detail = styled.div`
    display: block;
    min-width: 500px;
    max-width: 800px;
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

const Back = styled.div`
    margin: 10px 0px 10px 20px;
    background-color: #f5f5f5;
    width: 50px;
    text-align: center;

    :hover {
        background-color: #e5e5e5;
    }
`;
