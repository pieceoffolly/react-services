import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import autoBind from 'react-autobind';

const ParLiDiv = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
`;

class ListRow extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        // const backgroundColor = this.props.selected ? '#c0f0ff' : '#fff';
        return (
          <ParLiDiv
            onClick={this.onClick}>
            {this.props.children}
          </ParLiDiv>
        );
      }
    
      onClick() {
        if (typeof this.props.onClick === 'function') {
          this.props.onClick(this.props.rowId);
        }
      }
}

export default ListRow;
