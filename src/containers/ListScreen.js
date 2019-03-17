import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as ghActions from '../store/gh/action';
import * as ghSelectors from '../store/gh/reducer';
import ListView from '../components/ListView';
import ListRow from '../components/ListRow';


// const ListBody = styled.div`
//     margin: 10px 10px 10px 10px;
//     background: #f5f5f5;
// `;

// const ListHeader = styled.div

// ;

const Loading = styled.p`

`;

const Avatar = styled.img`
    max-width:50px;
    max-height:50px;
`;


class ListScreen extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    };

    render() {
        if (!this.props.elementsById) return this.renderLoading();
        return (
            <div>
                <ListView
                    rowsIdArray={this.props.elementsIdArray}
                    rowsById={this.props.elementsById}
                    ulType={this.props.ulType}
                    src={this.props.src}
                    renderRow={this.renderRow} 
                />
            </div>
        )
        
    };

    renderLoading() {
        return (
            <p>Loading...</p>
        )
    };

    renderRow(elementId, element) {
        return (
            <ListRow
                rowId={elementId}
                onClick={this.onRowClick}>  
                <Avatar src={element.avatar_url} alt='avatar' />                                 
                <a>{element.name}</a>
            </ListRow>
        )
    };

    onRowClick() {

    }
}

function mapStateToProps(state) {
    const [elementsById, elementsIdArray]  = ghSelectors.getReposes(state);
    const ulType = 'gh';
    return {
      elementsById,
      elementsIdArray,
      ulType
    };
  }

export default connect(mapStateToProps)(ListScreen);

//{/*  */}