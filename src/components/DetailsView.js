import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';

class DetailsView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        switch (this.props.detailsType) {
            case 'gh':
                return (
                    <div>
                        <h3>{this.props.details.Name}</h3>
                        <p>{this.props.details.owner}</p> 
                    </div>  
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
}

export default DetailsView;