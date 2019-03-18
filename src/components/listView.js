import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';

class ListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        switch (this.props.ulType) {
            case 'GH':
            case 'SOF':
                return (
                    <ListUl>
                        {_.map(this.props.rowsIdArray, this.renderRowById)}
                    </ListUl>          
                );
            case 'Section':
                return (
                    <SectionUl>
                        {_.map(this.props.rowsIdArray, this.renderRowById)}
                    </SectionUl>          
                );                  
            default:
               return(
                 <p>No content</p>
               );
        };
        
    }

    renderRowById(rowId) {
        switch (this.props.ulType) {
            case 'GH':
            case 'SOF':
                return (
                    <li key={rowId}>                        
                        {this.renderRowThroughProps(rowId)}                        
                    </li>
                );
            // case 'SOF':
            //     return (
            //         <SOFLi key={rowId}>
            //             {this.renderRowThroughProps(rowId)}
            //         </SOFLi> 
            //     );          
            case 'Section':
                return (
                    <SectionLi key={rowId}>
                        {this.renderRowThroughProps(rowId)}
                    </SectionLi> 
                );   
                    
            default:
               return(
                 <p>No content</p>
               );
        };
    }

    renderRowThroughProps(rowId) {
        if (typeof this.props.renderRow === 'function') {
            return this.props.renderRow(rowId, _.get(this.props.rowsById, rowId));
        }
    }
}

export default ListView;

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

const SectionUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    

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

    li:hover {
        background-color: #e5e5e5;
    }
`;

// div {
//     display: inline-block;
//     vertical-align: middle;     
//     margin-left: 10px;
// }
// &:before {
//     display: inline-block;
//     height: 100%;
//     vertical-align: middle;
// border: 2px solid black;  
// }