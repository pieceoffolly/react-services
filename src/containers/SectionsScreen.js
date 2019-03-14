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
    // if (!this.props.topicsByUrl) return this.renderLoading();
    return (
      <div className="SectionsScreen">
        <h3>Choose 3 topics of interest</h3>
        <SectionsView
            sectionsIDArray={this.props.sectionsNameArray}
            sectionsByID={this.props.sectionsByName}
            renderSection={this.renderSection} />
        {/* {!this.props.canFinalizeSelection ? false :
          <button className="NextScreen" onClick={this.onNextScreenClick} />
        } */}
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderSection(sectionID, section) {
    // const selected = this.props.selectedTopicsByUrl[topicUrl];
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

//   onSectionClick(sectionID) {
//     this.props.dispatch(sectionsActions.selectSection(sectionID));
//   }

//   onNextScreenClick() {
//     this.props.dispatch(topicsActions.finalizeTopicSelection());
//   }

}

// which props do we want to inject, given the global store state?
// always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
  const [sectionsByName, sectionsNameArray] = sectionsSelectors.getSections(state);
  return {
    sectionsByName,
    sectionsNameArray,    
    // canFinalizeSelection: sectionsSelectors.isTopicSelectionValid(state)
  };
}

export default connect(mapStateToProps)(SectionsScreen);
