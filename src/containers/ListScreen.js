import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as ghActions from '../store/gh/action';
import * as ghSelectors from '../store/gh/reducer';
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
                    src={this.props.src}
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
                <div><Avatar src={element.avatar_url} alt='avatar' /></div>
                <div> {element.name} (owner: {element.owner})</div>
            </ListRow>
        )
    };

    onRowClick(rowId) {
        const answer = window.confirm("Подтверждаете переход к просмотру?");
        if (answer) this.props.dispatch(ghActions.selectElement(rowId));
    }
}

function mapStateToProps(state) {
    const [elementsById, elementsIdArray, elementType]  = ghSelectors.getElements(state);
    const ulType = elementType;
    const header = 'Github repositories';
    return {
      elementsById,
      elementsIdArray,
      ulType,
      header
    };
  }

export default connect(mapStateToProps)(ListScreen);