import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import * as githubActions from '../store/github/action';
import * as githubSelectors from '../store/github/reducer';
import Paginator from '../reusable/Paginator';

class Github extends Component {   

    constructor(props) {
        super(props);
        this.onPageClick = this.onPageClick.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);
    }

    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
        this.props.dispatch(githubActions.fetchReposes());              
    }

    // componentWillReceiveProps() {
    //     window.onpopstate = this.onBackButtonEvent;
    // }

    render() {
        if (!this.props.reposes) return this.renderLoading();
        return (
            <Route path={"/gh/page"+this.props.currentPage}>
                <div>
                    <h3>Github repositories</h3>
                    <Paginator
                        currentPage={this.props.currentPage}
                        prevPage={this.props.prevPage}
                        totalPages={this.props.totalPages}
                        onClick={ this.onPageClick}
                    />
                    <ListUl>
                        {_.map( this.props.reposes, this.renderLi)}
                    </ListUl>                
                </div>
            </Route>                                 
        )
    }

    renderLi(repos) {
        return (
            <li key={repos.id}>    
                <ParLiDiv reposId={repos.id} >
                    <div><Avatar src={repos.image_url} alt='image' /></div>
                    <div> {repos.name} (owner: {repos.owner_name})</div>
                </ParLiDiv>                                              
            </li>  
        )
    }

    onPageClick(page) {
        this.props.dispatch(githubActions.setPage(page));
        // () => {dispatch(githubActions.setPage(page))};
    }

    onBackButtonEvent = (e) => {
        e.preventDefault();        
        let page;
        if (this.props.prevPage != '/') page = 'gh/page';
        let history = '/' + page + this.props.prevPage;        
        // this.props.dispatch(githubActions.setPage(this.props.prevPage))
        this.props.history.push(history);
    }

    renderLoading() {
        return (
            <h3>Loading...</h3>
        )
    };
}

function mapStateToProps(state) {
    const reposes = githubSelectors.getReposes(state);
    const currentPage = githubSelectors.getCurrentPage(state);
    const prevPage = githubSelectors.getPrevPage(state);
    const totalPages = githubSelectors.getTotalPages(state);
    return {
        reposes,
        currentPage,
        prevPage,
        totalPages
    };
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         // getRepos: () => dispatch(githubDetailAction.fetchReposes()),
//         onPageClick: () => dispatch(githubActions.setPage(props.newPage)),
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