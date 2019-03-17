import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';

const ListUl = styled.ul`
    flex-wrap: wrap;
    display: table;
    margin: 0;
    list-style-type: none;
`;

const SectionsUl = styled.ul`
    flex-wrap: wrap;
    justify-content: center;

`;

const GHLi = styled.li`
    margin: 0px 0px 10px 0px;
    background-color: #f5f5f5;
    border-radius: 5%;
    min-width: 150px;
    max-width:500px;
    height: 50px;
    text-align: left;

    div {
        display: inline-block;
        vertical-align: middle;     
        margin-left: 10px;
    }

    &:hover {
        background-color: #e5e5e5;
    }
`;

// &:before {
//     display: inline-block;
//     height: 100%;
//     vertical-align: middle;
// border: 2px solid black;  
// }

class ListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        switch (this.props.ulType) {
            case 'gh':
                return (
                    <ListUl>
                        {_.map(this.props.rowsIdArray, this.renderRowById)}
                    </ListUl>          
                );
            // case 'sof':
            //     return (
            //         <SOFLi key={rowId}>
            //             {this.renderRowThroughProps(rowId)}
            //         </SOFLi> 
            // );  
                          
            default:
               return(
                 <p>No content</p>
               );
        };
        
    }

    renderRowById(rowId) {
        switch (this.props.ulType) {
            case 'gh':
                return (
                    <GHLi key={rowId}>                        
                        {this.renderRowThroughProps(rowId)}                        
                    </GHLi>
                );
            // case 'sof':
            //     return (
            //         <SOFLi key={rowId}>
            //             {this.renderRowThroughProps(rowId)}
            //         </SOFLi> 
            // );                
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