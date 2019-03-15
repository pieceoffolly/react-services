import _ from 'lodash';
import React, {Component} from 'react';
import './list.css';
import autoBind from 'react-autobind';

export default class SectionsView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <ul className="tileList">
                {_.map(this.props.sectionsIDArray, this.renderSectionByID)}
            </ul>
        )
    }

    renderSectionByID(sectionID) {
        return (
            <li key = {sectionID}>
                {this.renderSectionThroughProps(sectionID)}
            </li>
        )
    }

    renderSectionThroughProps(sectionID) {
        if (typeof this.props.renderSection === 'function') {
            return this.props.renderSection(sectionID, _.get(this.props.sectionsByID, sectionID));
        }
    }
}

