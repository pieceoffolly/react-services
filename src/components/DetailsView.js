import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';

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

class DetailsView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        switch (this.props.detailsType) {
            case 'GH':
                return (
                    <Detail>
                        <img src={this.props.details.image_url} alt='image'/>
                        <a href={this.props.details.URL}>
                            <h3>{this.props.details.title}</h3>
                        </a>                        
                        <p>owner: {this.props.details.owner_name}</p> 
                        <p>stars: {this.props.details.stars}</p>
                    </Detail>  
                );
            case 'SOF':
                return (
                    <Detail>
                        <img src={this.props.details.image_url} alt='image'></img>
                        <h3>{this.props.details.title}</h3>
                        <p>owner: {this.props.details.owner_name}</p> 
                    </Detail> 
            );  
                          
            default:
               return(
                 <p>No content</p>
               );
        };
    }
}

export default DetailsView;