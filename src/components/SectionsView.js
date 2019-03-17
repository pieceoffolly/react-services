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
                {_.map(this.props.sectionsIdArray, this.renderSectionById)}
            </ul>
        )
    }

    renderSectionById(sectionId) {
        return (
            <li key = {sectionId}>
                {this.renderSectionThroughProps(sectionId)}
            </li>
        )
    }

    renderSectionThroughProps(sectionId) {
        if (typeof this.props.renderSection === 'function') {
            return this.props.renderSection(sectionId, _.get(this.props.sectionsById, sectionId));
        }
    }
}

