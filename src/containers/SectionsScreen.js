import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import './SectionsScreen.css';
import * as sectionsActions from '../store/sections/action';
import * as sectionsSelectors from '../store/sections/reducer';
import SectionsView from '../components/SectionsView';
import SectionsList from '../components/SectionsList';

class SectionsScreen extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(sectionsActions.fetchSections());
  }

  render() {
    return (
      <div>
        <h3>Choose sections</h3>
        <SectionsView
            sectionsIDArray={this.props.sectionsNameArray}
            sectionsByID={this.props.sectionsByName}
            renderSection={this.renderSection} />
      </div>
    );
  }

  renderSection(sectionID, section) {
    return (
      <SectionsList
        sectionID={sectionID}>
         {/* onClick={this.onRowClick}> */}
        {/* // selected={selected}> */}
        <img className="sectionImage" src={section.img} alt={section.URL} />
        {/* <img src={section.img} alt={section.url} /> */}
        {/* <h3>{topic.title}</h3>
        <p>{topic.description}</p> */}
      </SectionsList>
    )
  }

  // onSectionClick(sectionID) {
  //   this.props.dispatch(sectionsActions.selectSection(sectionID));
  // }
}

function mapStateToProps(state) {
  const [sectionsByName, sectionsNameArray] = sectionsSelectors.getSections(state);
  return {
    sectionsByName,
    sectionsNameArray,    
    // canFinalizeSelection: sectionsSelectors.isTopicSelectionValid(state)
  };
}

export default connect(mapStateToProps)(SectionsScreen);
