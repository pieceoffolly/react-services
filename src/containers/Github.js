import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import _ from 'lodash';
import * as githubActions from '../store/github/action';
import * as githubSelectors from '../store/github/reducer';
import Paginator from '../reusable/Paginator';

class Github extends Component {   

    componentDidMount() {
        this.props.dispatch(githubActions.fetchReposes());
    }
    render() {
        return (
            <div>
                <h3>Github repositories</h3>
                <ListUl>
                    {_.map( this.props.reposes, this.renderLi)}
                </ListUl>
                <Paginator
                    currentPage={this.props.currentPage}
                    totalPages={this.props.totalPages}
                />
            </div>            
        )
    }

    renderLi(repos) {
        // let repos = _.get(this.props.rowsById, reposId);
        return (
            <li key={repos.id}>    
                <ParLiDiv
                    reposId={repos.id}
                    // onClick={() => props.getRepos()}>
                >
                    <div><Avatar src={repos.image_url} alt='image' /></div>
                    <div> {repos.name} (owner: {repos.owner_name})</div>
                </ParLiDiv>                                              
            </li>  
        )
    }
}

function mapStateToProps(state) {
    const reposes = githubSelectors.getReposes(state);
    const currentPage = githubSelectors.getCurrentPage(state);
    const totalPages = githubSelectors.getTotalPages(state);
    return {
        reposes,
        currentPage,
        totalPages
    };
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getRepos: () => dispatch(githubDetailAction.fetchReposes()),
//         dispatch
//     }
// }

{/* <li key={reposId}>    
    <ParLiDiv
        rowId={rowId}
        onClick={this.onClick}>
        <div><Avatar src={element.image_url} alt='image' /></div>
        <div> {element.title} (owner: {element.owner_name})</div>
    </ParLiDiv>                                              
    {/* {this.renderRowThroughProps(rowId)}                         */}
// </li> */}
export default connect(mapStateToProps)(Github);

const ListUl = styled.ul`
    flex-wrap: wrap;
    display: table;
    margin: 0;
    list-style-type: none;

    li {
        margin: 0px 0px 10px 0px;
        background-color: #f5f5f5;
        border-radius: 5%;
        min-width: 150px;
        text-align: left;
        height: 50px;
    }

    li:hover {
        background-color: #e5e5e5;
    }

    div {
        display: inline-block;
        vertical-align: middle;     
        margin-left: 10px;
    }
`;
const Avatar = styled.img`
    max-width:50px;
    max-height:50px;
    margin-bottom: -10px;
`;

const ParLiDiv = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
`;