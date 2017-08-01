import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './searchBar.jsx'
import OrgTable from './orgTable.jsx'

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
    axios.get('https://voluntellme-api.herokuapp.com/api/v1/organizations').then((result) => {
      this.setState({ organizations: result.data });
    });
  }

  render () {
    return (
      <div>
        <div className='tab-header' id='explore-block'>
          <h1>Organization Search</h1>
          <p>Look for some organizations, get ideas for places to volunteer</p>
        </div>
        <div className='off-the-wall'>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
            />
          <OrgTable
            orgs={this.state.organizations}
            filterText={this.state.filterText}/>
        </div>
      </div>
    );
  }
}

export default Explore;
