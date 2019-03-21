import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import Github from './containers/Github';
import Stackoverflow from './containers/Stackoverflow';
import './App.css';
import GithubDetails from './containers/GithubDetails';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gh" component={Github} />
          <Route path="/sof" component={Stackoverflow} />  
          
          {/* <Route path="/gh/details:repos" component={GithubDetails} />         */}
        </Switch>
      </Router>
    );
  }
}

export default App;
