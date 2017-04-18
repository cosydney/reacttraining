import React, { Component } from 'react';
import '../App.css';
import Popular from "./Popular";
// var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Result = require('./Result');

const NoMatch = ({location}) => (
  <div className='align-center'>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  render () {
    return (
      <Router>
      <div className='container'>
      <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/battle/results' component={Result}/>
          <Route path='/popular' component={Popular} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
      </Router>
    )
  }
}



export default App;
