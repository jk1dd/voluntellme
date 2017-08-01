import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Info from './info/info.jsx'
import Map from './map/map.jsx'
import Explore from './explore/explore.jsx'

const MyMap = (props) =>{
  return (
    <Map
      zoom = {10}
      center = {{lat:39.7379591, lng:-104.9864946}}
      containerElement = {<div style={{ height: `100px` }} />}
      mapElement = { <div style={{ height: `1000px` }} /> }
      />
  )
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className='header'>
            <h1><img src='/solidarity-smaller.png' alt='raised hands logo' width='70px'></img>VolunTellMe</h1>
          </div>
          <ul id="navigation-bar">
            <li><Link to='/'>Info</Link></li>
            <li><Link to='/table'>Explore</Link></li>
            <li><Link to='/map'>Map</Link></li>
          </ul>

          <Route exact path='/' component={Info} />
          <Route path='/table' component={Explore} />
          <Route path='/map' component={MyMap} />

        </div>
      </Router>
    )
  }
}

export default App;
