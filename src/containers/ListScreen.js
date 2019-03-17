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
                onClick={this.onRowClick} >
                
            </ListRow>
        )
    };

    onRowClick() {

    }
}

function mapStateToProps(state) {
    const [elementsById, elementsIdArray]  = ghSelectors.getReposes(state);
    return {
      elementsById,
      elementsIdArray,
    };
  }

export default connect(mapStateToProps)(ListScreen);
