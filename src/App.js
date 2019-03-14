import React, { Component } from 'react';
import * as sectionSelectors from './store/sections/reducer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {!this.props.sectionChoosed 
          ? <SectionList /> 
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

export default App;
