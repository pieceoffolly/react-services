import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import * as githubActions from '../store/github/action';
import * as githubSelectors from '../store/github/reducer';
import * as githubDetailsActions from '../store/github/details/action';
import GithubDetails from './GithubDetails';
import Paginator from '../reusable/Paginator';
import queryString from 'query-string';

class Github extends Component {   

    constructor(props) {
        super(props);
        this.onPageClick = this.onPageClick.bind(this);
        this.renderLi = this.renderLi.bind(this);
        this.onReposClick = this.onReposClick.bind(this);
    }

    componentDidMount() {
        window.onpopstate = () => {
            const parsedQuery = queryString.parse(this.props.location.search);
            const page = parsedQuery.page;
            if (page) {
                this.props.dispatch(githubActions.setPage(page));
            } 
        }                      
    
    const parsedQuery = queryString.parse(this.props.location.search);
    const page = parsedQuery.page;
    this.props.dispatch(githubActions.fetchReposes(page)); 
    }

    // componentWillUnmount() {
    //     this.props.dispatch(githubActions.setPage(1));
    // }

    render() {        
        let renderPar = this.props.location.pathname.indexOf('details')
        if (!this.props.reposes) return this.renderLoading();
        return (            
            <div>
                {(renderPar == -1)?
                    <Body>
                        <Head>
                            <Back onClick={() =>this.props.history.push('/')} > 
                                Back 
                            </Back>
                            <Header>
                                <div>
                                    <Logo main src='images/Github_logo.png' alt='image' />
                                </div>
                                <div><h3>Popular Github repositories</h3></div>
                            </Header>
                            <div>
                                <Paginator
                                    currentPage={this.props.currentPage}
                                    totalPages={this.props.totalPages}
                                    onClick={this.onPageClick}
                                />
                            </div>                            
                        </Head>   
                        <Content>                            
                            <ListUl >
                                {_.map( this.props.reposes, this.renderLi)}
                            </ListUl>  
                        </Content>                                             
                    </Body>
                : null }
                                    
                <Route exact path="/gh/details/:reposId"  component={GithubDetails} /> ;                        
            </div>  
                                        
        )
    }

    renderLi(repos) {
        return (
            // <Link to={`/gh/details?repos=` + repos.id} link="#ffcc00"
            <Link to={`/gh/details/` + repos.id} link="#ffcc00"
                  style={{ color: 'black' }}>
                <li key={repos.id} id={repos.id} onClick={this.onReposClick}>    
                    <ParLiDiv reposId={repos.id} >
                        <div><Logo avatar src={repos.image_url} alt='image' /></div>
                        <div> {repos.name} (owner: {repos.owner_name})</div>
                    </ParLiDiv>                                              
                </li>
            </Link>
              
        )
    }

    onPageClick(page) {        
        this.props.dispatch(githubActions.setPage(page));
    }

    onReposClick(repos) {
        const answer = window.confirm("Подтверждаете переход к просмотру?");
        if (answer) this.props.dispatch(githubDetailsActions.fetchDetails(repos.currentTarget.id));
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
    const totalPages = githubSelectors.getTotalPages(state);
    const reposesFetchingEnd = githubSelectors.isFetchingEnd(state);
    return {
        reposes,
        currentPage,
        totalPages,
        reposesFetchingEnd
    };
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         // getRepos: () => dispatch(githubDetailAction.fetchReposes()),
//         onPageClick: () => dispatch(githubActions.setPage(props.newPage)),
//         dispatch
//     }
// }

export default connect(mapStateToProps)(Github);

const Body = styled.div`
    display: block;
    // margin_bottom: 10px;
`;

const Head = styled.div`
    display: block;
    position: fixed; 
    width: 100%;
    height: 170px;
    background-color: white;
`;

const Back = styled.div`
    text-align: left;
    margin: 10px 0px 10px 20px;
    background-color: #f5f5f5;
    width: 50px;
    text-align: center;

    :hover {
        background-color: #e5e5e5;
    }
`;

const Header = styled.div`    
    margin: 5px 0px 0px 20px; 
    div {
        display: inline-block;
    }

    h3 {
        margin-left: 10px;
    }
`;

const Logo = styled.img`
    max-width: ${props => props.main? '75px' : '50px'};
    max-height: ${props => props.main? '75px' : '50px'};
    border-radius: ${props => props.main? '0%': '50%'};
    margin-bottom: -10px;
`;

const Content = styled.div`
    // position: top;
    padding-top: 180px;
`;

const ListUl = styled.ul`
    flex-wrap: wrap;
    display: table;
    margin: 0;
    list-style-type: none;
    color: black;

    h3 {
        margin-left: 20px;
    }

    li {
        margin: 0px 0px 10px 0px;
        background-color: #f5f5f5;
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
const ParLiDiv = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
`;



