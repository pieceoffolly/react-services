import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sectionSelectors from './store/sections/reducer';
import SectionsScreen from './containers/SectionsScreen';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {!this.props.sectionChoosed 
          ? <SectionsScreen /> 
          : false
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sectionChoosed: sectionSelectors.isSectionChoosed(state)
  }
}

export default connect(mapStateToProps)(App);
