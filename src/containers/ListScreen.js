import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as elementsActions from '../store/elements/action';
import * as elementsSelectors from '../store/elements/reducer';
import ListView from '../components/ListView';
import ListRow from '../components/ListRow';

const Avatar = styled.img`
    max-width:50px;
    max-height:50px;
    margin-bottom: -10px;
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
                <h3>{this.props.header}</h3>
                <ListView
                    rowsIdArray={this.props.elementsIdArray}
                    rowsById={this.props.elementsById}
                    ulType={this.props.ulType}
                    renderRow={this.renderRow} 
                />                
            </div>
        )        
    };

    renderLoading() {
        return (
            <h3>Loading...</h3>
        )
    };

    renderRow(elementId, element) {
        return (
            <ListRow
                rowId={element.id}
                onClick={this.onRowClick}>  
                <div><Avatar src={element.image_url} alt='image' /></div>
                <div> {element.title} (owner: {element.owner_name})</div>
            </ListRow>
        )
    };

    onRowClick(rowId) {
        const answer = window.confirm("Подтверждаете переход к просмотру?");
        if (answer) this.props.dispatch(elementsActions.selectElement(rowId));
    };

    onChangePage(pageId) {

    }
}

function mapStateToProps(state) {
    const [elementsById, elementsIdArray, elementType]  = elementsSelectors.getElements(state);
    const ulType = elementType;
    switch(ulType) {
        case 'GH':
            var header = 'Github repositories';
            break;
        case 'SOF':
            var header = 'StackOverflow questions';
            break;        
    }
    
    return {
      elementsById,
      elementsIdArray,
      ulType,
      header
    };
  }

export default connect(mapStateToProps)(ListScreen);