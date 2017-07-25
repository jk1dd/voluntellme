import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Info from './info/info.jsx'
import Map from './map/map.jsx'
import Explore from './explore/explore.jsx'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Info</Link></li>
            <li><Link to='/table'>Explore</Link></li>
            <li><Link to='/map'>Map</Link></li>
          </ul>

          <hr/>

          <Route exact path='/' component={Info} />
          <Route path='/table' component={Explore} />
          <Route path='/map' component={Map} />

        </div>
      </Router>
    )
  }
}

export default App;
