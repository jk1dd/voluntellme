import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class OrgRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.org.name}</td>
        <td>{this.props.org.city}</td>
        <td>{this.props.org.county}</td>
        <td>{this.props.org.state}</td>
        <td>{this.props.org.zip}</td>
      </tr>
    );
  }
}

class OrgTable extends Component {
  render () {
    const rows = [];

    this.props.orgs.forEach((org) => {
      if ((org.name + org.city + org.county + org.state + org.zip).toLowerCase().indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<OrgRow org={org} key={org.id}/> );
    });

    return(
      <table id="org-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>County</th>
            <th>State</th>
            <th>ZIP</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  render () {
    return (
      <form>
        <div>Search for stuff here. </div>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextInputChange}/>
      </form>
    );
  }
}

class TableInfoText extends Component {
  render () {
    return (
      <h2>Look at all these organizations!</h2>
    );
  }
}

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      organizations: []
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/organizations').then((result) => {
      this.setState({ organizations: result.data });
    });
  }

  render () {
    return (
      <div>
        <TableInfoText />
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <OrgTable
          orgs={this.state.organizations}
          filterText={this.state.filterText}/>
      </div>
    );
  }
}

const Info = () => (
  <div className='volunteer-info'>
    <p>Info to go here</p>
  </div>
)

const Map = () => (
  <div>
    <p>Map to go here</p>
  </div>
)

class Navigation extends Component {
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

export default Navigation;
// export default Explore;
