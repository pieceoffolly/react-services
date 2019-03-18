import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sectionSelectors from './store/sections/reducer';
import * as elementsSelectors from './store/elements/reducer';
import SectionsScreen from './containers/SectionsScreen';
import ListScreen from './containers/ListScreen';
import DetailsScreen from './containers/DetailsScreen';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {!this.props.sectionChoosed 
          ? <SectionsScreen /> 
          : !this.props.elementChoosed
            ? <ListScreen />
            : <DetailsScreen />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sectionChoosed: sectionSelectors.isSectionChoosed(state),
    elementChoosed: elementsSelectors.isElementChoosed(state)
  }
}

export default connect(mapStateToProps)(App);
