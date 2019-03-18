import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import './SectionsScreen.css';
import * as sectionsActions from '../store/sections/action';
import * as sectionsSelectors from '../store/sections/reducer';
import ListView from '../components/ListView';
import ListRow from '../components/ListRow';

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
        <h3>Choose section</h3>
        <ListView
            rowsIdArray={this.props.sectionsNameArray}
            rowsById={this.props.sectionsByName}
            ulType='Section'
            renderRow={this.renderRow} 
        />
        
        {/* {!this.props.selectedSection 
         ? <h3>false</h3>
         : <h3>{this.props.selectedSection}</h3>} */}
      </div>
    );
  }

  renderRow(sectionId, section) {
    return (
      <ListRow
        rowId={sectionId}        
        onClick={this.onRowClick}>
        <img className="sectionImage" src={section.img} alt={section.URL} />
      </ListRow>
    )
  }
  //onClick={this.onSectionClick}>

  onRowClick(sectionId) {
    this.props.dispatch(sectionsActions.selectSection(sectionId));
  }
}

function mapStateToProps(state) {
  const [sectionsByName, sectionsNameArray] = sectionsSelectors.getSections(state);
  return {
    sectionsByName,
    sectionsNameArray,  
    selectedSection: sectionsSelectors.getSelectedSection(state)
  };
}

export default connect(mapStateToProps)(SectionsScreen);
