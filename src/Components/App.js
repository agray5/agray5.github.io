//Core
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import SideBar from './SideBar'
import Home from './Home'
import About from './About'

//Style
import './Styles/App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <SideBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/*
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contact" component={Contact} />*/}
        </Fragment>
      </Router>
    );
  }
}

export default App;
