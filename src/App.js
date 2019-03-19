import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import Github from './containers/Github';
import Stackoverflow from './containers/Stackoverflow';
import './App.css';


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   {!this.props.sectionChoosed 
      //     ? <SectionsScreen /> 
      //     : !this.props.elementChoosed
      //       ? <ListScreen />
      //       : <DetailsScreen />
      //   }
      // </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gh" component={Github} />
          <Route path="/sof" component={Stackoverflow} />
        </Switch>
      </Router>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     sectionChoosed: sectionSelectors.isSectionChoosed(state),
//     elementChoosed: elementsSelectors.isElementChoosed(state)
//   }
// }

export default App;
