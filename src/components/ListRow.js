import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

class ListRow extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        // const backgroundColor = this.props.selected ? '#c0f0ff' : '#fff';
        return (
          <div
            onClick={this.onClick}>
            {this.props.children}
          </div>
        );
      }
    
      onClick() {
        if (typeof this.props.onClick === 'function') {
          this.props.onClick(this.props.rowId);
        }
      }
}

export default ListRow;
