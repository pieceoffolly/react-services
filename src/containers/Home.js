import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';

class Home extends Component {
  
    // componentDidMount() {
    //   this.props.dispatch(sectionsActions.fetchSections());
    // }
  
    render() {
      return (
        <Home_div>
            <h3>Choose section</h3>
            <SectionUl>              
                <Link to="/gh?page=1">
                    <SectionLi>
                        <img src='images/Github.png' alt='image'/>
                    </SectionLi>
                </Link>
                <Link to="/sof?page=1">
                    <SectionLi>
                        <img src='images/Stackoverflow.png' alt='image'/>
                    </SectionLi>
                </Link>
          </SectionUl>
        </Home_div>
      );
    }
}

export default Home;

const Home_div = styled.div`
    text-align: center;
`;

const SectionUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    

    li:hover {
        background-color: #e5e5e5;
    }

    img {
        max-width:200px;
        max-height:200px;
        margin-top: 20%;
        -moz-transition: all 1s ease-out;
        -o-transition: all 1s ease-out;
        -webkit-transition: all 1s ease-out;
    }

    img:hover {
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -webkit-transform: scale(1.1);    
    }   
`;

const SectionLi = styled.li`
    margin: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 20%;
    width: 250px;
    height: 250px;
    list-style: none;      
`;